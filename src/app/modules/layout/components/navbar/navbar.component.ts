import { Component, OnInit } from '@angular/core';

import { AuthCookieService } from '../../../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  possuiErro!: boolean;
  ehAdmin!: boolean;

  constructor(
    private authCookieService: AuthCookieService
  ) { }

  ngOnInit(): void {
  }

  usuarioEstaLogado(): boolean {
    return this.authCookieService.estaAutenticado();
  }

}
