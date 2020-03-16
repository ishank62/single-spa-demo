import { Component } from "@angular/core";

@Component({
  selector: "app2-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app2";

  back = () => {
    window.history.pushState(null, null, "/app1");
  };
}
