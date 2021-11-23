import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthCookieService } from '../../../../services';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(
    private authCookieService: AuthCookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authCookieService.deletarCookie();
    this.router.navigate(['/home']);
  }

}
