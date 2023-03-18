import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login1',
    pathMatch: 'full'
  },
  {
    path: 'login1',
    loadChildren: () => import('./pages/logins/login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./pages/logins/login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'login3',
    loadChildren: () => import('./pages/logins/login3/login3.module').then( m => m.Login3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
