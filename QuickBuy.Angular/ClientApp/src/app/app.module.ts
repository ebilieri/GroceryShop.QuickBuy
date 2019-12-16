import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
// Importar componentes criados aqui
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    // declaracao de componentes
    ProdutoComponent,
    LoginComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] }, // mapeamento das rotas
      { path: 'entrar', component: LoginComponent },
      { path: 'novo-usuario', component: CadastroUsuarioComponent }
    ])
  ],
  providers: [UsuarioServico], // Configurar os serviços
  bootstrap: [AppComponent]
})
export class AppModule { }
