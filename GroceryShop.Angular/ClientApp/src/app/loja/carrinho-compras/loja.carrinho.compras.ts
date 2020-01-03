import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");

    if (!produtosLocalStorage) {
      // se não existir nada dentro do localStorage
      this.produtos.push(produto);     
    } else {
      // se ja existir pelo menos um item armazenado na sessao(produtosLocalStorage)
      this.produtos = JSON.parse(produtosLocalStorage);
      this.produtos.push(produto);      
    }

    localStorage.setItem("produtosLocalStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");

    if (produtosLocalStorage)
      return JSON.parse(produtosLocalStorage);
  }

  public removerProduto(produto: Produto) {

  }
}
