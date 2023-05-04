import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RootTrending, Trending } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private baseUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=3292cdd5a6cbb228478683fa0704595d'

  constructor(private http: HttpClient) { }


  getMovies(): Observable<Trending[]> {
    return this.http.get<RootTrending>(this.baseUrl).pipe(
      map(r => r.results)
    );
  }
}
