import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/service/global.service";
@Component({
  selector: "app-contactmodal",
  templateUrl: "./contactmodal.component.html",
  styleUrls: ["./contactmodal.component.scss"],
})
export class ContactmodalComponent implements OnInit {
  isDisplay: any = false;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService
      .getIsModalBoxShow()
      .subscribe((value) => (this.isDisplay = value));
  }

  addFocus(e: any) {
    e.target.parentNode.classList.add("active");
  }
  removeFocus(e: any) {
    e.target.parentNode.classList.remove("active");
  }

  addFocusTextArea(e: any) {
    e.target.classList.add("active");
  }
  removeFocusTextArea(e: any) {
    e.target.classList.remove("active");
  }

  closeModal(): void{
    this.globalService.isModalBoxShow.next(false);
  }
}
