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
import { ReviewComponent } from './main-page/review/review.component';
import { AvailableBrandsComponent } from './main-page/categories/available-brands/available-brands.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TvComponent } from './main-page/categories/tv/tv.component';
import { AccessoriesComponent } from './main-page/categories/accessories/accessories.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductGalleryComponent } from './main-page/categories/product-gallery/product-gallery.component';
import { SideBarV2Component } from './main-page/side-bar-v2/side-bar-v2.component';
import { SingleBrandComponent } from './main-page/categories/available-brands/single-brand/single-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    PageNotFoundComponent,
    ReviewComponent,
    AvailableBrandsComponent,
    SpinnerComponent,
    TvComponent,
    AccessoriesComponent,
    ProductGalleryComponent,
    SideBarV2Component,
    SingleBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
