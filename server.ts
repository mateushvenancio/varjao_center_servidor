import app from "./src/app";

app.listen(process.env.PORT || 3000, () => {
    console.log("Rodando!");
});
