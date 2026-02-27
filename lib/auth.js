import { Provider } from "@base-ui/react/direction-provider/index.parts";
import { betterAuth } from "better-auth";
import { PrismaAdapter } from "@better-auth/prisma-adapter"
import { db } from "./db";

export const auth = betterAuth({
    database: prismaAdapter(db,{
        provider:'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    }
});