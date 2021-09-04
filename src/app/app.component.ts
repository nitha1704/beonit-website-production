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
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }
  }

  checkLanguage() {
    // const checkLang = localStorage.getItem('lang') || 'en';
    // this.translate.setDefaultLang(checkLang);
    this.translate.setDefaultLang('en');
  }
}
