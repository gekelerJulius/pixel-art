import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pixelate',
    loadChildren: () => import('./features/pixelate/pixelate.module').then(m => m.PixelateModule),
  },
  {
    path: '',
    redirectTo: 'pixelate',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
