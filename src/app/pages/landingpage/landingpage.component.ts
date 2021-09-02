import { Component, OnInit, OnDestroy } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html",
  styleUrls: ["landingpage.component.scss"],
})
export class LandingpageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}

  openModal(wrapContactModal) {
    wrapContactModal.classList.add("active");
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 0,
    dotsSpeed: 0,
    navText: [
      '<a class="left carousel-control carousel-control-prev" role="button" tabindex="0"><span aria-hidden="true" class="icon-prev carousel-control-prev-icon"></span><!----><span class="sr-only">Previous</span></a>',
      '<a class="right carousel-control carousel-control-next" role="button" tabindex="0"><span aria-hidden="true" class="icon-next carousel-control-next-icon"></span><span class="sr-only">Next</span></a>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
}
