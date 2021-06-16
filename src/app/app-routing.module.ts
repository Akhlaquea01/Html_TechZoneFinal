import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AvailableBrandsComponent } from './main-page/categories/available-brands/available-brands.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "main", component: MainPageComponent },
  { path: "user", component: LoginRegisterComponent },
  { path: "contact", component: MainPageComponent },
  { path: "products", component: MainPageComponent },
  { path: "feedback", component: MainPageComponent },
  { path: "about", component: MainPageComponent },
  { path: "services", component: MainPageComponent },
  { path: "brands", component:AvailableBrandsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
