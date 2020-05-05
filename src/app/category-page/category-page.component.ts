import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  category: string;
  isLoading: boolean = true;
  items: any[] = [{name: 'Loading...'}];

  ngOnInit(): void {
    this.route.data.subscribe( data => {
      this.isLoading = false;
      this.items = data.categoryData;
    });
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

  addToWatchList() {
  }
}
