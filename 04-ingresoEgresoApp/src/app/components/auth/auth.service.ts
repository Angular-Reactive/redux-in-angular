/**
 * Este servicio se encargara de las funciones de login,
 * para saber si el usuario esta autenticado, para hacer
 * el logout.
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth,
                private router: Router) { }

  /**
   * Crear un nuevo usuario.
   * @param nombre Nombre del usuario
   * @param email E-mail del usuario
   * @param password Password del usuario
   */
  crearUsuario(nombre: string, email: string, password: string) {

    // Crear el usuario con email y password
    this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then( resp => {
          console.log(resp);
          this.router.navigate(['/']);
        })
        .catch(error => {
          console.error(error);
        });
  }
}
