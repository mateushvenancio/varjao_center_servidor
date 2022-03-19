import calcularPrecoFinalProduto from "../../core/calcular_preco_final";
import ProdutoEntity from "../../entities/produto_entity";

describe("should calculate the correct price", () => {
    it("10% of 100 -> 90", () => {
        const produto = new ProdutoEntity("", 100, [], "", 10);
        const result = calcularPrecoFinalProduto(produto);
        expect(result).toBe(90);
    });
    it("35% of 93 -> 60.45", () => {
        const produto = new ProdutoEntity("0", 93, [], "", 35);
        const result = calcularPrecoFinalProduto(produto);
        expect(result).toBe(60.45);
    });
    it("15% of 125 -> 106.25", () => {
        const produto = new ProdutoEntity("0", 125, [], "", 15);
        const result = calcularPrecoFinalProduto(produto);
        expect(result).toBe(106.25);
    });
});
