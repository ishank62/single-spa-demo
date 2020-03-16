import { Component, OnInit } from "@angular/core";
import { assetUrl } from "src/single-spa/asset-url";

@Component({
  selector: "app1-empty-route",
  templateUrl: "./empty-route.component.html"
})
export class EmptyRouteComponent implements OnInit {
  yoshiUrl = assetUrl("yoshi.png");

  constructor() {}

  ngOnInit() {}

  back = () => {
    window.history.pushState(null, null, "/app2");
  };
}
