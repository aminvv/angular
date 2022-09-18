import { Component, OnInit } from '@angular/core';
import { Employee } from '../module/Employee';
import { KeyValue } from '../module/grade';
import { GradeService } from '../services/grade.service';
 import { FormGroup,FormControl,FormBuilder ,Validators, MinValidator} from '@angular/forms';
@Component({
  selector: 'app-eployee-info',
  templateUrl: './eployee-info.component.html',
  styleUrls: ['./eployee-info.component.css']
})
export class EployeeInfoComponent implements OnInit {
  grade:KeyValue[] 
  employee:Employee =new Employee(0,"","","","",0,"");
  Coustomer:FormGroup;
  buliderForm

  constructor(private gradeservice:GradeService ,private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.grade=this.gradeservice.GetAll()

    this.Coustomer= this.fb.group({
      FirstName:['amin',Validators.required],
      LastName:['' ,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      CoustomerCode:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      Email:['',[Validators.required,Validators.email]],

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
