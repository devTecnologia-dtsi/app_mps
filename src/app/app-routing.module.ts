import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'salud/:id',
    loadChildren: () => import('./pages/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'organizaciones/:id',
    loadChildren: () => import('./pages/organizaciones/organizaciones.module').then( m => m.OrganizacionesPageModule)
  },
  {
    path: 'bienestar/:id',
    loadChildren: () => import('./pages/bienestar/bienestar.module').then( m => m.BienestarPageModule)
  },
  {
    path: 'calidad/:id',
    loadChildren: () => import('./pages/calidad/calidad.module').then( m => m.CalidadPageModule)
  },
  {
    path: 'mps/:id',
    loadChildren: () => import('./pages/mps/mps.module').then( m => m.MpsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./pages/contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'emociones/:id',
    loadChildren: () => import('./pages/emociones/emociones.module').then( m => m.EmocionesPageModule)
  },
  {
    path: 'estimulacion/:id',
    loadChildren: () => import('./pages/estimulacion/estimulacion.module').then( m => m.EstimulacionPageModule)
  },
  {
    path: 'ruleta',
    loadChildren: () => import('./pages/ruleta/ruleta.module').then( m => m.RuletaPageModule)
  },
  {
    path: 'emociones2/:id',
    loadChildren: () => import('./pages/emociones2/emociones2.module').then( m => m.Emociones2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
