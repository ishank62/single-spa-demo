import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  countryList$ = of([
    {
      id: 0,
      name: "Africa"
    },
    {
      id: 1,
      name: "America"
    },
    {
      id: 2,
      name: "Italy"
    },
    {
      id: 3,
      name: "China"
    },
    {
      id: 4,
      name: "India"
    }
  ]);

  constructor() {}
}
