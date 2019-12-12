import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private router: Router) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioAutenticado(): boolean {
    var autenticado = sessionStorage.getItem("usuario-autenticado");
    if (autenticado == "1") {
      // se usuaria autenticado
      return true;
    }
    return false;
  }

  sair() {
    sessionStorage.setItem("usuario-autenticado", "0");
    this.router.navigate(['/']);
  }
}
