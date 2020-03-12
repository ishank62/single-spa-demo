import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login/login.service";
import { Observable } from "rxjs";

@Component({
  selector: "app1-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  countryList: Observable<any>;

  constructor(private LoginService: LoginService) {
    this.countryList = this.LoginService.countryList$;
  }

  ngOnInit() {}
}
