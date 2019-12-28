import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelo/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Router } from '@angular/router';

@Component({
  selector: 'pesquisa-produto',
  templateUrl: './pesquisa.produto.component.html',
  styleUrls: ['./pesquisa.produto.component.css']
})

export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.carregarProdutos();
  }


  private carregarProdutos() {
    this.produtoServico.obterTodosProdutos()
      .subscribe(produtos_data => {
        this.produtos = produtos_data;
      }, erro => {
        console.log(erro.error);
      });
  }

  public adicionarProduto() {
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente excluir o produto selecionado?");
    if (retorno == true) {
      //alert(produto.id);
      this.produtoServico.deletar(produto.id).subscribe(
        dataResult => {
          this.produtos = dataResult;
        },
        erro => {
          console.log(erro.error);
        });
    }
  }
}
