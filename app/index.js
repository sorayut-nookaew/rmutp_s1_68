"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var client_1 = require("@prisma/client");
//import { PrismaClient } from "../generated/prisma/client";
var prisma = new client_1.PrismaClient();
var app = new hono_1.Hono();
app.get("/", function (c) { return c.text("Hello, World!"); });
app.get("/about", function (c) {
    return c.json({
        message: "Sorayut Nookaew"
    });
});
app.get("/profile", function () {
    //logic
    var profiles = prisma.profile.findMany();
    return profiles;
});
exports.default = app;
