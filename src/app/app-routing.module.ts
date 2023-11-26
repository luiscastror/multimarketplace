import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ItemComponent } from './pages/marketplace/item/item.component';
import { SearchComponent } from './pages/marketplace/search/search.component';
import { CartComponent } from './pages/marketplace/cart/cart.component';
import { LoginComponent } from './pages/marketplace/login/login.component';
import { CategoriesComponent } from './pages/marketplace/categories/categories.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item', component: ItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
