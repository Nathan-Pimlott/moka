import * as fs from "fs";
import * as glob from "glob";

import { definePath, getFileData, getStubFileNames } from "../";
import { buffer, globRes, mockApp, mockValidData } from "../../mock";

describe("testing getStubFileNames", () => {
    it("should return an array of (mocked) file names", async () => {
        jest.spyOn(glob, "sync").mockReturnValueOnce(globRes);
        const result = await getStubFileNames();
        console.log("Result: ", result);

        expect(result).toBe(globRes);
    });
});

describe("testing getFileData", () => {
    it("should return the buffer of the file", async () => {
        jest.spyOn(fs, "readFileSync").mockReturnValueOnce(buffer);
        const result = await getFileData("test");
        expect(result).toBe(buffer);
    });
});

describe("testing definePath", () => {
    it("should return the buffer of the file", async () => {
        const result = await definePath(mockApp, mockValidData);
        expect(result).toBe(true);
    });
});
