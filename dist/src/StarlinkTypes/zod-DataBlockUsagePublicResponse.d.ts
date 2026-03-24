import { z } from "zod";
declare const _default: z.ZodObject<{
    startDateUtc: z.ZodOptional<z.ZodString>;
    expirationDateUtc: z.ZodOptional<z.ZodString>;
    totalAmountGB: z.ZodOptional<z.ZodNumber>;
    consumedAmountGB: z.ZodOptional<z.ZodNumber>;
    perBlockAmountGB: z.ZodOptional<z.ZodNumber>;
    dataBlockType: z.ZodOptional<z.ZodEnum<{
        IncludedWithBaseSubscription: "IncludedWithBaseSubscription";
        RecurringPerBillingCycle: "RecurringPerBillingCycle";
        Overage: "Overage";
        OneTimePurchase: "OneTimePurchase";
    }>>;
    productId: z.ZodOptional<z.ZodString>;
    blocksCount: z.ZodOptional<z.ZodNumber>;
    perBlockPrice: z.ZodOptional<z.ZodNumber>;
    totalPrice: z.ZodOptional<z.ZodReadonly<z.ZodNumber>>;
    isoCurrencyCode: z.ZodOptional<z.ZodString>;
    serviceLineUsage: z.ZodOptional<z.ZodArray<z.ZodObject<{
        serviceLineNumber: z.ZodOptional<z.ZodString>;
        consumedAmountGB: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>>;
    monthlyUsage: z.ZodOptional<z.ZodArray<z.ZodObject<{
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        serviceLineUsage: z.ZodOptional<z.ZodArray<z.ZodObject<{
            serviceLineNumber: z.ZodOptional<z.ZodString>;
            consumedAmountGB: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-DataBlockUsagePublicResponse.d.ts.map