import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


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


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  // My Customize Pages
  { path: "home", component: LandingpageComponent },
  { path: "contact-us", component: ContactusComponent },
  { path: "about-us", component: AboutusComponent },
  { path: "team", component: TeamComponent },
  { path: "achievement", component: AchievementComponent },
  { path: "offer", component: OfferComponent },

  // Products
  { path: "iot", component: IotComponent },
  { path: "erp", component: ErpComponent },
  { path: "research", component: ResearchComponent },
  { path: "keyboard", component: KeyboardComponent },
  { path: "pulse-oximeter", component: PulseOximeterComponent },
  { path: "water-quality-monitoring", component: WaterQualityMonitoringComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
