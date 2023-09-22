import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',

})
export class RegistroPage implements OnInit {
  // Variables para enlazar con el formulario
  email: string = '';
  password: string = '';

  // Mensaje de error
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void
    {

  }


}
