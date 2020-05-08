import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TITLE } from '../util/constants';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  readonly pageTitle = TITLE;
  entity: any;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.route.data
    .subscribe( data => {
      this.entity = data.entity;
      this.titleService.setTitle( (this.entity.title || this.entity.name) + ' - ' + this.pageTitle );
    });
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

}
