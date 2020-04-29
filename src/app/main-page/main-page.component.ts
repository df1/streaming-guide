import { Component, OnInit } from '@angular/core';
import { REPO_URL, SPONSOR_URL, PROVIDER_LIST } from '../util/constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  readonly REPO_URL = REPO_URL;
  readonly SPONSOR_URL = SPONSOR_URL;
  readonly PROVIDER_LIST = PROVIDER_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
