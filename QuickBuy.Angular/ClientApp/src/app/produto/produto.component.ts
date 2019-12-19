import { Component, OnInit } from '@angular/core'
import { Produto } from '../modelo/produto';
import { ProdutoServico } from '../servicos/produto/produto.servico';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner;
  public  mensagem: string[];

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  // fazer upload imagem produto
  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativarSpinner();

    // chamar serviço enviar arquivo
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          this.desativarSpinner();
          //alert(this.produto.nomeArquivo);
          console.log(nomeArquivo);
        },
        erro => {
          this.desativarSpinner();
          console.log(erro.error);
        }
      );
  }

  public cadastrar() {
    this.ativarSpinner();

    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        data_json => {
          this.desativarSpinner();
          console.log(data_json);
        },
        erro => {
          this.desativarSpinner();
          this.mensagem = erro.error;
          console.log(erro.error);
        }
      );
  }

  public ativarSpinner() {
    this.ativar_spinner = true;
  }

  public desativarSpinner() {
    this.ativar_spinner = false;
  }

}
