import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',

})
export class RegistroPage implements OnInit {
  // Variables para enlazar con el formulario
  email: string = '';
  password: string = '';

  // Mensaje de error
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Código que quieres que se ejecute al inicializar la página
    // Si no hay necesidad de ejecutar algo específico al iniciar, puedes dejarlo vacío
  }


  async login() {
    const result = await this.authService.signIn(this.email, this.password);
    if (result !== true) {
          // Mostrar el mensaje de error
        alert("Usuario no registrado")
    } else {
        // Acciones después de un registro exitoso
        alert("Usuario Registrado con exito")

    }
  }

}
