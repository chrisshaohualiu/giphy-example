import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(private giphy: GiphyService, private route: ActivatedRoute) {}
  gifs: any;
  ngOnInit(): void {
    this.getGifs();
  }

  getGifs = () => {
    this.route.queryParamMap.subscribe((params) => {
      this.giphy.getData(params.get('term')).subscribe((response) => {
        this.gifs = response.data;
        console.log(this.gifs);
      });

      console.log(params.get('term'));
    });
  };
}
