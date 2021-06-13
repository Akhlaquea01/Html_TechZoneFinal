import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SideBarComponent } from './main-page/side-bar/side-bar.component';
import { SlidesComponent } from './main-page/slides/slides.component';
import { CategoriesComponent } from './main-page/categories/categories.component';
import { FeedbackComponent } from './main-page/feedback/feedback.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    SideBarComponent,
    SlidesComponent,
    CategoriesComponent,
    FeedbackComponent,
    FooterComponent,
    LoginRegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
