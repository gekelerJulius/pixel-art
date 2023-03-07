import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PixelateComponent} from "./pixelate/pixelate.component";

const routes: Routes = [
  {
    path: '',
    component: PixelateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixelateRoutingModule { }
