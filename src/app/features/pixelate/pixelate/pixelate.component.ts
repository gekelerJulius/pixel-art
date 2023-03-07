import { Component, OnInit } from '@angular/core';
import { PixelateService } from '../../../shared/services/pixelate.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pixelate',
  templateUrl: './pixelate.component.html',
  styleUrls: ['./pixelate.component.scss'],
})
export class PixelateComponent implements OnInit {
  constructor(private pixelateService: PixelateService) {}
  imgSrc$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  async ngOnInit(): Promise<void> {
    const resp = await fetch('https://source.unsplash.com/400x400/?landscape');
    this.imgSrc$.next(resp.url);
    await this.pixelate();
  }

  async onInputBlur(): Promise<void> {
    await this.pixelate();
  }

  async pixelate(): Promise<void> {
    this.pixelateService
      .pixelateRequest(this.imgSrc$.getValue())
      .subscribe((res: Blob) => {
        // Get the image URL from the blob
        const url = URL.createObjectURL(res);
        // Set the image source to the blob URL
        this.imgSrc$.next(url);
      });
  }
}
