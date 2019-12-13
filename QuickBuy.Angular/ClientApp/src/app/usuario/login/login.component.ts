import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {

  }

  /*
   *Ciclo de vida de um componente
   * https://medium.com/xp-inc/angular-ngoninit-e-constructor-be52ad5ba599
   */
  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
  }

  // Efetuar login no sistema
  entrar() {

    if (this.usuario.email == "ebilieri@gmail.com" && this.usuario.senha == "1234") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
  }
}
