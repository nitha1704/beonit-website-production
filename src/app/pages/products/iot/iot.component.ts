import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-iot",
  templateUrl: "./iot.component.html",
  styleUrls: ["./iot.component.scss"],
})
export class IotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openModal(wrapContactModal) {
    wrapContactModal.classList.add("active");
  }
}
