import * as fs from "fs";
import * as glob from "glob";
import { IData } from "../types";

const mockPath = `${__dirname}/../mocks`;

export async function getStubs(app: any) {
    const files = await getStubFileNames();
    return files.map(async (filename: string) => {
        const fileData = await getFileData(filename);
        const parsedData = JSON.parse(fileData.toString());
        return await definePath(app, parsedData);
    });
}

export async function getStubFileNames() {
    try {
        return await Promise.resolve(glob.sync(`${mockPath}/**/*.json`, {}));
    } catch (error) {
        return [];
    }
}

export async function getFileData(filename: string) {
    try {
        console.log("Filename: ", filename);

        return await Promise.resolve(fs.readFileSync(filename));
    } catch (error) {
        throw Error(`Cannot get file ${filename}`);
    }
}

export async function definePath(app: any, data: IData) {
    try {
        app[data.method.toLowerCase()](
            data.url,
            async (_req: any, res: any) => {
                return res.status(data.status).send(data.response);
            }
        );
        return true;
    } catch (error) {
        throw Error("Unable to define path");
    }
}
