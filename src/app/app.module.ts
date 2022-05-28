import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import { OurWorkRightComponent } from './components/our-work-right/our-work-right.component';
import { OurWorkLeftComponent } from './components/our-work-left/our-work-left.component';
import { OfficeComponent } from './components/office/office.component';
import { MemberComponent } from './components/member/member.component';
import { ThumbnailPostComponent } from './components/thumbnail-post/thumbnail-post.component';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { NewspaperComponent } from './components/newspaper/newspaper.component';
import { ButtonComponent } from './components/button/button.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServiceComponent } from './pages/service/service.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareerComponent } from './pages/career/career.component';
import { InsightComponent } from './pages/insight/insight.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedWorkComponent,
    OurWorkRightComponent,
    OurWorkLeftComponent,
    OfficeComponent,
    MemberComponent,
    ThumbnailPostComponent,
    TwitterPostComponent,
    NewspaperComponent,
    ButtonComponent,
    HomepageComponent,
    ServiceComponent,
    OurWorkComponent,
    AboutUsComponent,
    CareerComponent,
    InsightComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
