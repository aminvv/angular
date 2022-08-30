import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{category} from'../module/category';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly apiUrl=`${environment.apiUrl}/Categories`
  constructor(private http:HttpClient) { }

  getAll():Observable<category[]>{
    return this.http.get<category[]>(this.apiUrl)
  }
}
