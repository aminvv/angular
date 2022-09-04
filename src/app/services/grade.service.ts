import { Injectable } from '@angular/core';
import { KeyValue } from '../module/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  grade:KeyValue[]=[
  new  KeyValue(1,"diplom"),
  new  KeyValue(1,"Kardani"),
  new  KeyValue(1,"Karshenasi"),
  new  KeyValue(1,"Arshad"),
  new  KeyValue(1,"Doctora"),
] 
 constructor() { }

 GetAll():KeyValue[]{
return this.grade;
 }
}
