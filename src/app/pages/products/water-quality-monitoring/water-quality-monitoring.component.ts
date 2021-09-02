import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-water-quality-monitoring",
  templateUrl: "./water-quality-monitoring.component.html",
  styleUrls: ["./water-quality-monitoring.component.scss"],
})
export class WaterQualityMonitoringComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  openModal(wrapContactModal) {
    wrapContactModal.classList.add("active");
  }
}
