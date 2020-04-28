import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  category: string;
  isLoading: boolean = true;
  items: any[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.category = params.get('category');
        this.categoryService.getCategory(this.category).subscribe( (data: any[]) => {
          this.items = data;
          this.isLoading = false;
        });
    });
  }

}
