import { Injectable } from '@angular/core';
import { Subject, Observable, } from 'rxjs';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../_model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuariosCambio = new Subject<Usuario[]>();
  mensajeCambio = new Subject<string>();
  url = `${HOST}/usuarios`;

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Usuario[]>(this.url);
  }

  usuariopages(p: number, s: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/usuariopages?page=${p}&size=${s}`);
  }

  actualizar(usuario: Usuario) {
    return this.http.put(this.url, usuario);
  }
}
