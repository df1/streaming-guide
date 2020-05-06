import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GENRE_MAP } from '../util/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategory(category: string):Observable<any> {
    return this.http.get(`/assets/sample-data/${category}.json`)
      .pipe(map( (data: any[]) => {
        data.forEach( i => i.genre_ids = i.genre_ids.map( genre => GENRE_MAP[genre]));
        return data;
      }));
  }
}
