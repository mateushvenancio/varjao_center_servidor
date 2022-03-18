import express from "express";
import ProdutosRoute from "./routes/produtos_route";

const app = express();

app.use("/produtos", ProdutosRoute);

export default app;
