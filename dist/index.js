import Starlink from "./src/Starlink.js";
const main = async () => {
    let starlink = Starlink.getInstance({
        ClientId: "a21279fd-8bff-4fa4-8a98-c19236c39abd",
        AccountNumber: "ACC-5138402-14586-12",
        ClientSecret: "0775447842JnrAndile#",
    });
    return await starlink.getUserTerminals("ACC-5138402-14586-12");
};
main().then((a) => console.log(a));
//# sourceMappingURL=index.js.map