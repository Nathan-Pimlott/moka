export interface IData {
    method: "GET" | "POST" | "PUT" | "DELETE";
    url: string;
    status: number;
    response?: object;
}
