import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  entity: any;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.route.data
    .subscribe( data => {
      if( data.entity.error ){
        // error handling
        this.error = data.entity.error.message;
      } else {
        this.entity = data.entity;
        // set the page title for SEO
        this.titleService.setTitle( (this.entity.title || this.entity.name));
      }
    });
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

}
