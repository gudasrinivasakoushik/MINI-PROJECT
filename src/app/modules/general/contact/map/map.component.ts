import { Component, OnInit } from '@angular/core';
import { WebwebService } from 'src/app/services/webweb.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {
  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:WebwebService){
    proService.getallwebcourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }


}
