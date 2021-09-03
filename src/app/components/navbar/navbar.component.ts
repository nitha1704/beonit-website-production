import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  autoclose = false;
  constructor(private router: Router, private translate: TranslateService) {
    router.events.subscribe(val => {
      this.autoclose = true;
      this.isCollapsed = true;
    });
  }

  ngOnInit() {}

  changeLanguage(language: any) {
    this.translate.use(language);
  }
}
