import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { PointsTrackerComponent } from './components/points-tracker/points-tracker.component';
import { RewardsCatalogComponent } from './components/rewards-catalog/rewards-catalog.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: RewardsCatalogComponent },
  { path: 'points-tracker', component: PointsTrackerComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact-us', component: ContactUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
