import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Images, RootImages } from '../models/img-config-model';

@Injectable({
  providedIn: 'root'
})
export class ImgConfigService {
private imgUrl = 'https://api.themoviedb.org/3/configuration?api_key=3292cdd5a6cbb228478683fa0704595d'

  constructor(
    private http: HttpClient
  ) { }

  getImgConfig(): Observable<string> {
    return this.http.get<RootImages>(this.imgUrl).pipe(
      map(response => response.images.secure_base_url)
    );
  }
}
