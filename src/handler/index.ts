import * as fs from "fs";

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
        return await Promise.resolve(fs.readdirSync(mockPath));
    } catch (error) {
        return [];
    }
}

export async function getFileData(filename: string) {
    try {
        return await Promise.resolve(
            fs.readFileSync(`${mockPath}/${filename}`)
        );
    } catch (error) {
        throw Error(`Cannot get file ${filename}`);
    }
}

export async function definePath(app: any, data: any) {
    try {
        return app[data.method?.toLowerCase()](
            data.url,
            (_req: any, res: any) => res.status(data.status).send(data.response)
        );
    } catch (error) {
        throw Error("Unable to define path");
    }
}
