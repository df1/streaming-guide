import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategory(category: string) {
    return this.http.get(`/assets/sample-data/${category}.json`);
  }
}
