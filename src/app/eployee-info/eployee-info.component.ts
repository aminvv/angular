import { Component, OnInit } from '@angular/core';
import { Employee } from '../module/Employee';
import { KeyValue } from '../module/grade';
import { GradeService } from '../services/grade.service';
 import { FormGroup,FormControl,FormBuilder ,Validators, MinValidator, FormArray} from '@angular/forms';
@Component({
  selector: 'app-eployee-info',
  templateUrl: './eployee-info.component.html',
  styleUrls: ['./eployee-info.component.css']
})
export class EployeeInfoComponent implements OnInit {
  grade:KeyValue[] 
  employee:Employee =new Employee(0,"","","","",0,"");
  Coustomer:FormGroup;
  buliderForm :FormGroup;
  Formtemplate=[{'type':"textBox",'label':"FirstName"},{'type':"textBox",'label':"LastName"},
  {'type':"select",'label':"City",'option':["teharn","tabirz","urmia"]}]


  constructor(private gradeservice:GradeService ,private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.grade=this.gradeservice.GetAll()
     let Group={}
    this.Formtemplate.forEach(q=>{
      Group[q.label]=new FormControl('')
    })
    this.Coustomer=new FormGroup(Group)

    this.Coustomer= this.fb.group({
      FirstName:['amin',Validators.required],
      LastName:['' ,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      CoustomerCode:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      Email:['',[Validators.required,Validators.email]],
      
      AccountInfoForm:this.fb.group({
        AcountNumber:['',Validators.required],
        AcountTitle:['',Validators.required],
        Sheba:['',Validators.required],
      }),

      AddressList:this.fb.array([this.initAddressForm()])

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
get AccountInfoForm(){
  return this.Coustomer.get('AccountInfoForm')
}

get addressArray(){
  return this.Coustomer .get('AddressList')as FormArray

}

initAddressForm(){
return this.fb.group({
  type:[''],
  address:[''],
})
}

addNewAddress(event){
  event.preventDefault() 
  this.addressArray.push(this.initAddressForm());
}
RemoveAddress(event,index){
  event.preventDefault();
  this.addressArray.removeAt(index)
}

onsubmit(){
console.log(this.Formtemplate.values);

}

}
