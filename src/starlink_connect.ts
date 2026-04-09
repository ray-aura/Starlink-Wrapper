import type { StarlinkArgs, StarlinkCredinitals } from "./Types.ts";

class Starlink_Connect {
  private baseURL: string = "https://web-api.starlink.com/enterprise/v2/";
  // maps AccountNumber -> credentialsMap
  private credentialsMap: Map<string, StarlinkCredinitals>;

  constructor(configurations: StarlinkArgs | StarlinkArgs[]) {
    this.credentialsMap = new Map();

    if (Array.isArray(configurations)) {
      configurations.forEach((i) => {
        this.credentialsMap.set(i.AccountNumber, {
          ClientId: i.ClientId,
          ClientSecret: i.ClientSecret,
          AccessToken: null,
          TimeCreated: null,
        });
      });
    } else {
      this.credentialsMap.set(configurations.AccountNumber, {
        ClientId: configurations.ClientId,
        ClientSecret: configurations.ClientSecret,
        AccessToken: null,
        TimeCreated: null,
      });
    }
  }

  private async fetchAccessToken(config: StarlinkCredinitals): Promise<string> {
    const response = await fetch(
      "https://starlink.com/api/auth/connect/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: config.ClientId,
          client_secret: config.ClientSecret,
          grant_type: "client_credentials",
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    let accessToken: any = await response.json();
    //console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not received in the response.");
    }

    return accessToken?.access_token;
  }

  /*
   * Need to add better token use of token for the return type
   * Need to add check it see if token is still valid
   *
   *
   * */
  private async getHeader(
    accountNumber: string,
  ): Promise<{ [key: string]: string }> {
    let token = "";

    let configurations = this.credentialsMap.get(accountNumber);

    if (!configurations) {
      throw new Error("This account was not set up at initalisation");
    }

    if (
      !configurations.AccessToken ||
      this.IsAccessTokenExpired(configurations.TimeCreated)
    ) {
      //code to insert access Token
      token = await this.fetchAccessToken(configurations);
      this.credentialsMap.set(accountNumber, {
        AccessToken: token,
        TimeCreated: Date.now(),
        ClientSecret: configurations.ClientSecret,
        ClientId: configurations.ClientId,
      });
    }
    return {
      Accept: "application/json",
      Authorization: `Bearer ${configurations.AccessToken || token}`,
      "Content-Type": "application/json",
    };
  }

  private IsAccessTokenExpired(TimeCreated: number | null): boolean {
    // checks if the access token is still valid
    // It expires after 900 seconds // 15 mintutes
    if (!TimeCreated) return true;
    let now = (Date.now() - TimeCreated) / 1000; // convert ms -> seconds
    if (now >= 900) return true;
    return false;
  }

  public async Request(
    accountNumber: string,
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body = {},
  ): Promise<any> {
    let full_url = `${this.baseURL}${url}`;
    let headers = await this.getHeader(accountNumber);

    let options: any = {};

    if (method === "GET") {
      options = {
        method,
        headers,
      };
    } else {
      options = {
        method,
        headers,
        body: JSON.stringify(body),
      };
    }

    console.log(options);
    // loop for instances were access token might expire
    for (let i = 0; i < 2; i++) {
      const response = await fetch(full_url, options);
      if (response.status === 401) {
        // invalid access token so we try fetch the data again
        options.headers = await this.getHeader(accountNumber);
        continue;
      }

      if (response.ok) {
        return await response.json();
      } else {
        console.log(response);
        throw new Error(
          `Error when making request with status code : ${response.status}`,
        );
      }
    }
  }
}

/*
const main = async () => {
  let starlink = new Starlink_Connect({
    ClientId: "143447c1-6395-4cf8-876a-f0b59baffbce",
    AccountNumber: "ACC-7575740-96586-34",
    ClientSecret: "0775447842JnrAndile#",
  });
};

//main().then((a) => console.log(a));
//
//\
*/
export default Starlink_Connect;
