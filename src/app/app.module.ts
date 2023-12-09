import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Components
import { NavComponent } from './components/nav/nav.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { WallComponent } from './components/wall/wall.component';
import { TitleSubtitleComponent } from './components/title-subtitle/title-subtitle.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { TerminosYCondicionesComponent } from './components/terminos-ycondiciones/terminos-ycondiciones.component';

// Pages admin
import { AdminComponent } from './pages/admin/admin.component';
import { AdminAddressComponent } from './pages/admin/admin-address/admin-address.component';
import { AdminItemsComponent } from './pages/admin/admin-items/admin-items.component';
import { AdminInfoComponent } from './pages/admin/admin-info/admin-info.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';

// Pages admin store
import { StoreDashboardComponent } from './pages/admin/store-dashboard/store-dashboard.component';
import { StoreProfileComponent } from './pages/admin/store-profile/store-profile.component';
import { StoreItemsComponent } from './pages/admin/store-items/store-items.component';
import { StoreCategoriesComponent } from './pages/admin/store-categories/store-categories.component';
import { StoreOrdersComponent } from './pages/admin/store-orders/store-orders.component';


// Pages marketplace
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ItemComponent } from './pages/marketplace/item/item.component';
import { CartComponent } from './pages/marketplace/cart/cart.component';
import { CategoriesComponent } from './pages/marketplace/categories/categories.component';
import { StoreComponent } from './pages/marketplace/store/store.component';
import { CategoryComponent } from './pages/marketplace/category/category.component';
import { SearchComponent } from './pages/marketplace/search/search.component';
import { LoginComponent } from './pages/marketplace/login/login.component';
import { BlankComponent } from './pages/marketplace/blank/blank.component';
import { StoresComponent } from './pages/marketplace/stores/stores.component';
import { PromosComponent } from './pages/marketplace/promos/promos.component';
import { TerminosYcondicionesComponent } from './pages/marketplace/terminos-ycondiciones/terminos-ycondiciones.component';
import { RegisterComponent } from './pages/marketplace/register/register.component';
import { LoadingComponent } from './components/loading/loading.component';



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
    BannerComponent,
    ProductComponent,
    CardProductComponent,
    FooterComponent,
    WallComponent,
    TitleSubtitleComponent,
    BlankComponent,
    ProductCartComponent,
    StoresComponent,
    PromosComponent,
    ProductSearchComponent,
    TerminosYcondicionesComponent,
    TerminosYCondicionesComponent,
    AdminItemsComponent,
    AdminInfoComponent,
    AdminOrdersComponent,
    AdminComponent,
    AdminAddressComponent,
    StoreDashboardComponent,
    StoreProfileComponent,
    StoreItemsComponent,
    StoreCategoriesComponent,
    StoreOrdersComponent,
    RegisterComponent,
    LoadingComponent
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
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
