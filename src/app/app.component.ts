import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document,
    private translate: TranslateService
  ) {
    
  }

  @HostListener("window:scroll", ["$event"])
  ngOnInit() {
    this.onWindowScroll();
    this.checkLanguage();
  }

  onWindowScroll() {
    var element = document.getElementById("navbar-top");
    var navbarCollapse = document.querySelector(".navbar-collapse-header");
    if (window.pageYOffset > 100) {
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }

    if(element.classList.contains('bg-danger')){
      navbarCollapse.classList.add('active');
    } else {
      navbarCollapse.classList.remove("active");
    }
  }

  checkLanguage() {
    // const checkLang = localStorage.getItem('lang') || 'en';
    // this.translate.setDefaultLang(checkLang);
    this.translate.setDefaultLang('en');
  }
}
