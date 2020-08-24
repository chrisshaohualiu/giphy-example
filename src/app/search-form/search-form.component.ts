import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GiphyService } from '../giphy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  data: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  search = (form: NgForm) => {
    this.router.navigate(['search'], {
      queryParams: {
        term: form.value.searchTerm,
      },
    });
  };
}
