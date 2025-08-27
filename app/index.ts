import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
//import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => c.text("Hello, World!"));

app.get("/about", (c) => {
    return c.json({
        message: "Sorayut Nookaew"
    });
});
app.get("/profile", () => {
    //logic
    const profiles = prisma.profile.findMany();
    return profiles;
});

export default app;