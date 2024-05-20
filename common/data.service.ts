import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Producto } from './tienda';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loadTienda(): Observable<Producto[]>{
    return this.http.get<Producto[]>("https://api.escuelajs.co/api/v1/products");
  }

  loadProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>("https://api.escuelajs.co/api/v1/products/" + id);
  }
  
  loadCategorias(): Observable<Category[]>{
    return this.http.get<Category[]>("https://api.escuelajs.co/api/v1/categories");
  }

  loadCat(id: number): Observable<Producto[]>{
    return this.http.get<Producto[]>("https://api.escuelajs.co/api/v1/categories/" + id + "/products");
  }
}