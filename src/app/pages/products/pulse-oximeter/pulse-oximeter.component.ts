import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-pulse-oximeter",
  templateUrl: "./pulse-oximeter.component.html",
  styleUrls: ["./pulse-oximeter.component.scss"],
})
export class PulseOximeterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openModal(wrapContactModal) {
    wrapContactModal.classList.add("active");
  }
}
