import supertest from "supertest";
import app from "../../app";

const server = supertest(app);

describe("route /produtos", () => {
    it("get /", async () => {
        const resposta = await server.get("/produtos");
        expect(resposta.statusCode).toBe(200);
    });
});
