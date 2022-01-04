export const mockValidData = {
    url: "/hello/:world",
    method: "GET",
    status: 200,
    response: {
        hello: "world",
    },
};

export const mockApp = {
    get: (url: string) => ({
        req: {},
        res: {
            status: (code?: number) => ({
                send: (data: object) => data,
            }),
        },
    }),
};
