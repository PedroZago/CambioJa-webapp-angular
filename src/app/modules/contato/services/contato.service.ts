import { Injectable } from '@angular/core';

import { Contato } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  enviarMensagem(mensagem: Contato) {
    console.log(mensagem);
  }
}
