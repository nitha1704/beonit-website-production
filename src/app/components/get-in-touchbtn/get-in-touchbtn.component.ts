import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
@Component({
  selector: 'app-get-in-touchbtn',
  templateUrl: './get-in-touchbtn.component.html',
  styleUrls: ['./get-in-touchbtn.component.scss']
})
export class GetInTouchbtnComponent implements OnInit {

  

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.globalService.isModalBoxShow.next(true);
  }

}
