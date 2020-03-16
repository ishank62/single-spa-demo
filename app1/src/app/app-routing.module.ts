import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { LoginComponent } from "./login/login.component";
import { APP_BASE_HREF } from "@angular/common";
import { from } from "rxjs";

const routes: Routes = [
  // {
  //   path: "login",
  //   component: LoginComponent
  // },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: EmptyRouteComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
  // { path: "**", redirectTo: "/gpd" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/app1" }]
})
export class AppRoutingModule {}
