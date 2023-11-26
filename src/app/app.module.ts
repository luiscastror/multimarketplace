import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavComponent } from './components/nav/nav.component';

// Pages admin
import { LoginAdminComponent } from './pages/admin/login/login.component';

// Pages marketplace
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ItemComponent } from './pages/marketplace/item/item.component';
import { CartComponent } from './pages/marketplace/cart/cart.component';
import { CategoriesComponent } from './pages/marketplace/categories/categories.component';
import { StoreComponent } from './pages/marketplace/store/store.component';
import { CategoryComponent } from './pages/marketplace/category/category.component';
import { SearchComponent } from './pages/marketplace/search/search.component';
import { LoginComponent } from './pages/marketplace/login/login.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    LoginComponent,
    CartComponent,
    CategoriesComponent,
    StoreComponent,
    CategoryComponent,
    SearchComponent,
    NavComponent,
    LoginAdminComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
