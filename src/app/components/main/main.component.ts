import { Component, OnInit } from '@angular/core';
import { Trending } from 'src/app/models/model';
import { ImgConfigService } from 'src/app/service/img-config.service';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  moviesAll: Trending[] = [];

  imgUrl!: string;

  constructor(
    private moviesService: MoviesService,
    private imagesService: ImgConfigService
  ) {}

  ngOnInit() {
    this.moviesService.getMovies().subscribe({
      next: (mov) => (this.moviesAll = mov),
      error: (err) => console.log(err),
    });

    this.imagesService.getImgConfig().subscribe({
      next: (val) => (this.imgUrl = val),      
    });
  }
}
