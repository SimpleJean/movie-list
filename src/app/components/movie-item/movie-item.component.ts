import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trending } from 'src/app/models/model';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  route = inject(ActivatedRoute)
  moviesService = inject(MoviesService)

  oneMovie: Trending[] = [];

  ngOnInit() {
const id = this.route.snapshot.paramMap.get('id');
console.log(id);


    this.moviesService.getMovies().subscribe({
      next: (mov) => this.oneMovie = mov.filter(m => m.id === Number(id)),
      
      error: (err) => console.log(err),
    });
  }
}
