import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { NavComponent } from './components/nav/nav.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { WallComponent } from './components/wall/wall.component';
import { TitleSubtitleComponent } from './components/title-subtitle/title-subtitle.component';

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
import { BrandsComponent } from './pages/marketplace/brands/brands.component';
import { BlankComponent } from './pages/marketplace/blank/blank.component';
import { FormsModule } from '@angular/forms';



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
    BannerComponent,
    ProductComponent,
    CardProductComponent,
    FooterComponent,
    WallComponent,
    TitleSubtitleComponent,
    BrandsComponent,
    BlankComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
