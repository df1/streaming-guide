import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { switchMap, startWith, map } from 'rxjs/operators';
import { Observable, of, iif } from 'rxjs';
import { SHORT_TITLE,  MENU_TREE } from '../util/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  readonly shortTitle = SHORT_TITLE;
  readonly menuTree = MENU_TREE;
  items$: Observable<any[]>;
  entityType$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private elementRef: ElementRef,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    // if the landing page is this page, the resolver returns `{isNeedLoad: true}`,
    // need to call `this.categoryService.getCategory()` here.
    // otherwise, just use the data provided by the resolver
    this.items$ = this.route.data.pipe(switchMap( data　=>
      iif( () => data.categoryData.isNeedLoad === true,
        this.route.paramMap.pipe(switchMap(params => this.categoryService.getCategory(params.get('category')))),
        of(data.categoryData)
    )), startWith([{isLoading: true}]));

    // Identify if it's movie or tv (for link to the detail page)
    this.entityType$ = this.route.paramMap.pipe(map( params => params.get('category') === 'movies' ? 'movie':'tv' ));

    // when `history.back()`, need space to restore scroll to the previous position
    // defined `min-height:6000px` in css; after `OnInit`, restore to 90vh
    this.elementRef.nativeElement.style.minHeight = '90vh';

    // change title
    this.route.paramMap.subscribe( params => {
      const category = this.menuTree.find( i => i.link === '/category/' + params.get('category'));
      this.titleService.setTitle( category.name + ' - ' + this.shortTitle );
    });
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

  addToWatchList() {
  }
}
