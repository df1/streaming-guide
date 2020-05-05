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
    private route: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }

  category: string;
  isLoading: boolean = true;
  items: any[] = [{name: 'loading...'}];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.isLoading = true;
        this.category = params.get('category');
        this.categoryService.getCategory(this.category).subscribe( (data: any[]) => {
          this.items = data;
          this.isLoading = false;
        });
    });
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

  addToWatchList() {
  }
}
