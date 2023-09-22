import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'usuario/agregar',
    loadChildren: () => import('./Usuario/agregar/sgregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'usuario/modificar',
    loadChildren: () => import('./Usuario/modificar/modificar.moule').then( m => m.ModificarPageModule)
  },
  {
    path: 'usuario/eliminar',
    loadChildren: () => import('./Usuario/eliminar/eliminar.moule').then( m => m.EliminarPageModule)
  },
  {
    path: 'usuario/listar',
    loadChildren: () => import('./Usuario/listar/listar.moule').then( m => m.ListarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
