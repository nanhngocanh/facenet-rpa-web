import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InsightComponent } from './pages/insight/insight.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'insight',
    component: InsightComponent
  },
  {
    path: 'our-work',
    component:  OurWorkComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
