import { Component, OnInit } from '@angular/core';
import { REPO_URL, SPONSOR_URL, CATEGORY_LIST } from '../../util/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  readonly REPO_URL = REPO_URL;
  readonly SPONSOR_URL = SPONSOR_URL;
  readonly MENU_TREE = CATEGORY_LIST;
  constructor() { }

  ngOnInit(): void {
  }

  categoryClick(e: Event) {
    e.preventDefault();
  }
}
