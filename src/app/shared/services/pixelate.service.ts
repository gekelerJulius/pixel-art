import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PixelateService {
  constructor(private http: HttpClient) {}

  pixelateRequest(imgSrc: string): Observable<Blob> {
    return this.http.post<Blob>(
      'http://localhost:3000/pixelate',
      { imgSrc },
      { responseType: 'blob' as 'json' }
    );
  }
}
