import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelateComponent } from './pixelate/pixelate.component';
import { PixelateRoutingModule } from './pixelate-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PixelateComponent],
  imports: [CommonModule, PixelateRoutingModule, SharedModule],
})
export class PixelateModule {}
