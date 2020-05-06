import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { switchMap, startWith } from 'rxjs/operators';
import { Observable, of, iif } from 'rxjs';

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

  items: any[];
  items$: Observable<any[]>;

  ngOnInit(): void {
    // if the resolver returns `{isNeedLoad: true}`, need to call `this.categoryService.getCategory()` here.
    // otherwise, just use the data provided by the resolver
    this.items$ = this.route.data.pipe(switchMap( data　=>
      iif( () => data.categoryData.isNeedLoad === true,
        this.route.paramMap.pipe(switchMap(params => this.categoryService.getCategory(params.get('category')))),
        of(data.categoryData)
    )), startWith([{isLoading: true}]));

    // TODO when `history.back()`, need space to scroll to the previous position
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

  addToWatchList() {
  }
}
