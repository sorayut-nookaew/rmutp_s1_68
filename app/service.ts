import * as crypto from "crypto";

const secretKey = process.env.SECRET_KEY ?? undefined;

const makeKey = crypto
    .createHash("sha256")
    .update(String(secretKey))
    .digest("base64")
    .substring(0, 32);
const enableData = Buffer.from("123457890123456");

export const encode = (data: string) => {
    const cipher = crypto.createCipheriv("aes-256-cbc", makeKey, enableData);
    const encrypted = cipher.update(data, "utf-8", "base64");
    const final = cipher.final("base64");
    return encrypted + final;
};

export const decode = (data: string) => {
    const decipher = crypto.createDecipheriv("aes-256-cbc", makeKey, enableData);
    const encrypted = decipher.update(data, "utf-8", "base64");
    const final = decipher.final("base64");
    return encrypted + final;
};