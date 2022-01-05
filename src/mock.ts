import { IData } from "./types";

export const mockValidData: IData = {
    url: "/hello/:world",
    method: "GET",
    status: 200,
    response: {
        hello: "world",
    },
};

export const mockApp = {
    get: () => {
        return null;
    },
};

// buffer = ["hello", "world"];
export const buffer =
    "<Buffer 5b 22 74 65 73 74 22 2c 22 68 65 6c 6c 6f 22 2c 22 77 6f 72 6c 64 22 5d>";

export const globRes = ["hello", "world"];
