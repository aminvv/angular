import { Component, OnInit } from '@angular/core';
import { logingservice } from 'src/app/loging.service';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css'],
  providers: [logingservice]
})
export class HomeServiceComponent implements OnInit {

  constructor(private logservices: logingservice) { }

  ngOnInit(): void {
  }

  log() {
    this.logservices.log("log form Home component")
    this.logservices.log(this.logservices.title)
  }
  onchange(event: Event) {
this.logservices.title=(event.target as HTMLInputElement ).value
  }

}
