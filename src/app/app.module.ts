import { BrowserModule } from "@angular/platform-browser";
import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";

// Owl Carousel
import { CarouselModule } from "ngx-owl-carousel-o";

// Ngx Translate
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

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


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    CollapseModule.forRoot(),
    TagInputModule,
    CarouselModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
