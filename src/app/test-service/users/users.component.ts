import { Component, OnInit } from '@angular/core';
import { logingservice } from 'src/app/loging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[logingservice]
})
export class UsersComponent implements OnInit {

  constructor(private logservices:logingservice) { }

  ngOnInit(): void {
  }
  log() {
    this.logservices.log("log form Users component")
  }
}
