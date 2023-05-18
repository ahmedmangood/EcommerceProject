import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }
    
  getList() {
        return this.http.get('https://dummyjson.com/products');
      }

  getListById(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}

