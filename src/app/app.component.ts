import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login',icon: 'person' },
    { title: 'Registro', url: '/registro',icon: 'people' },
    { title: 'Agregar Usuario', url: '/usuario/agregar',icon: 'add' },
    { title: 'Modificar Usuario', url: '/usuario/modificar',icon: 'cloud' },
    { title: 'Eliminar Usuario', url: '/usuario/eliminar', icon: 'trash' },
    { title: 'Listar Usuario', url: '/usuario/listar', icon: 'reader' },
  ];
  public labels = [];
  constructor() {}
}
