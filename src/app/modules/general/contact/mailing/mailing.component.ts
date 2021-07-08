import { Component, OnInit } from '@angular/core';
import { JavajavaService } from 'src/app/services/javajava.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent  {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:JavajavaService){
    proService.getalljavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

}
