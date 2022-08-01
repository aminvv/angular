import { Component, OnInit } from '@angular/core';
import { logingservice } from 'src/app/loging.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[logingservice]
})
export class UserComponent implements OnInit {

  constructor(private logservices: logingservice) { }

  ngOnInit(): void {
  }
  log() {
    this.logservices.log("log form Child users compnent")
  }
}
