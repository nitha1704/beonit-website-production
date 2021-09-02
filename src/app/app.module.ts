import { BrowserModule } from "@angular/platform-browser";
import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
//import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { TimepickerModule } from "ngx-bootstrap/timepicker";

import { CarouselModule } from "ngx-owl-carousel-o";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";







// My Component
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactmodalComponent } from "./components/contactmodal/contactmodal.component";

// My Page
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { LandingpageComponent } from "./pages/landingpage/landingpage.component";
import { OfferComponent } from './pages/offer/offer.component';
import { TeamComponent } from './pages/team/team.component';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { IotComponent } from './pages/products/iot/iot.component';
import { ErpComponent } from './pages/products/erp/erp.component';
import { ResearchComponent } from './pages/products/research/research.component';
import { KeyboardComponent } from './pages/products/keyboard/keyboard.component';
import { PulseOximeterComponent } from './pages/products/pulse-oximeter/pulse-oximeter.component';
import { WaterQualityMonitoringComponent } from './pages/products/water-quality-monitoring/water-quality-monitoring.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AboutusComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    OfferComponent,
    ContactmodalComponent,
    TeamComponent,
    AchievementComponent,
    IotComponent,
    ErpComponent,
    ResearchComponent,
    KeyboardComponent,
    PulseOximeterComponent,
    WaterQualityMonitoringComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    AngularMultiSelectModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    

    // Owl Carousel
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
