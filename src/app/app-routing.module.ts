import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ItemComponent } from './pages/marketplace/item/item.component';
import { SearchComponent } from './pages/marketplace/search/search.component';
import { CartComponent } from './pages/marketplace/cart/cart.component';
import { LoginComponent } from './pages/marketplace/login/login.component';
import { CategoriesComponent } from './pages/marketplace/categories/categories.component';
import { BlankComponent } from './pages/marketplace/blank/blank.component';
import { StoreComponent } from './pages/marketplace/store/store.component';
import { CategoryComponent } from './pages/marketplace/category/category.component';
import { StoresComponent } from './pages/marketplace/stores/stores.component';
import { PromosComponent } from './pages/marketplace/promos/promos.component';

const routes: Routes = [
    { path: '', component: BlankComponent },
    { path: 'home', component: HomeComponent },
    { path: 'item', component: ItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'store', component: StoreComponent },
    { path: 'promo', component: PromosComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
