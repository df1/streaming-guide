import { Component, OnInit } from '@angular/core';
import { REPO_URL, SPONSOR_URL } from '../util/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  readonly REPO_URL = REPO_URL;
  readonly SPONSOR_URL = SPONSOR_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
