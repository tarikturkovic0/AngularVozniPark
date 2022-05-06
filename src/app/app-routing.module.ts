import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {NePostojiComponent} from "./ne-postoji/ne-postoji.component";
import {VozilaComponent} from "./homepage/vozila/vozila.component";
import {AnalyticsComponent} from "./homepage/analytics/analytics.component";
import {LicitacijaComponent} from "./homepage/licitacija/licitacija.component";
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const redirectToLogin = () => redirectUnauthorizedTo('login');
const redirectLoggedIn = () => redirectLoggedInTo('homepage');

const routes: Routes = [
  {path: 'login', component: LoginComponent, ...canActivate(redirectLoggedIn)},
  {path: 'homepage', component: HomepageComponent,
    ...canActivate(redirectToLogin),
    children: [
      {path: '', redirectTo: '/homepage/vozila', pathMatch: 'full'},
      {path: 'vozila', component: VozilaComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'licitacija', component: LicitacijaComponent}
    ]},
  {path: 'nema', component: NePostojiComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: '**', component: NePostojiComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
