import { Component, OnInit, OnDestroy } from "@angular/core";
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: "app-contactus",
  templateUrl: "contactus.component.html",
  styleUrls: ["contactus.component.scss"],
})
export class ContactusComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("contact-page");

    this.installGoogleMap();
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("contact-page");
  }

  installGoogleMap() {
    let loader = new Loader({
      apiKey: "AIzaSyAMZUyYlK9Rhg5Oxi3A7Nmkkk1dE5swM4M",
    });

    loader.load().then(() => {
      const myLatLng = { lat: 13.726956, lng: 100.475933 };
      var map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 19,
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        title: "Be on It รับแก้ปัญหา โดยใช้ It",
      });
      marker.setMap(map);
    });
  }

  showBorder(event: any) {
    const divParent = event.target.parentNode;
    divParent.classList.add("active");
  }
  hideBorder(event: any) {
    const divParent = event.target.parentNode;
    divParent.classList.remove("active");
  }

  showBorderTextArea(event: any) {
    const elem = event.target;
    elem.classList.add("active");
  }
  hideBorderTextArea(event: any) {
    const elem = event.target;
    elem.classList.remove("active");
  }
}
