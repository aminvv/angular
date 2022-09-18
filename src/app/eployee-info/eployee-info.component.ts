import { Component, OnInit } from '@angular/core';
import { Employee } from '../module/Employee';
import { KeyValue } from '../module/grade';
import { GradeService } from '../services/grade.service';
 import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-eployee-info',
  templateUrl: './eployee-info.component.html',
  styleUrls: ['./eployee-info.component.css']
})
export class EployeeInfoComponent implements OnInit {
  grade:KeyValue[] 
  employee:Employee =new Employee(0,"","","","",0,"");
  Coustomer:FormGroup;

  constructor(private gradeservice:GradeService) { }

  ngOnInit(): void {
    this.grade=this.gradeservice.GetAll()

    this.Coustomer= new FormGroup({
      FirstName:new FormControl('aa'),
      LastName:new FormControl(''),
      CoustomerCode:new FormControl(''),
      Email:new FormControl(''),
     })

  }
 save(value){
  console.log("Employee");
console.log(this.employee);
this.employee=value
console.log("log");

console.log(this.grade.find(q=>q.Id==this.employee.gradeId)?.title );

this.employee.gradeTitle=this.grade.find(q=>q.Id==this.employee.gradeId)?.title

}
savea(){

  console.log(this.Coustomer.value);
  
}

}