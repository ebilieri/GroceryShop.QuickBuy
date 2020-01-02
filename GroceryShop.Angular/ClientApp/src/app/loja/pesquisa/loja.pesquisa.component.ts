import { Component, OnInit } from '@angular/core'
import { Produto } from '../../modelo/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.pesquisa.component.html',
  styleUrls: ['./loja.pesquisa.component.css']
})

export class LojaPesquisaComponent implements OnInit {
  public produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.produtoServico.obterTodosProdutos()
      .subscribe(dataResult => {
        this.produtos = dataResult;
      }, erro => {
        console.log(erro.error);
      });
  }

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }
}
