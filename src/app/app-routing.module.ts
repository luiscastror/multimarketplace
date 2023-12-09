import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Marketplace
import { HomeComponent } from './pages/marketplace/home/home.component';
import { ItemComponent } from './pages/marketplace/item/item.component';
import { SearchComponent } from './pages/marketplace/search/search.component';
import { CartComponent } from './pages/marketplace/cart/cart.component';
import { LoginComponent } from './pages/marketplace/login/login.component';
import { CategoriesComponent } from './pages/marketplace/categories/categories.component';
import { StoreComponent } from './pages/marketplace/store/store.component';
import { CategoryComponent } from './pages/marketplace/category/category.component';
import { StoresComponent } from './pages/marketplace/stores/stores.component';
import { PromosComponent } from './pages/marketplace/promos/promos.component';
import { TerminosYcondicionesComponent } from './pages/marketplace/terminos-ycondiciones/terminos-ycondiciones.component';
import { RegisterComponent } from './pages/marketplace/register/register.component';
import { CheckoutComponent } from './pages/marketplace/checkout/checkout.component';

// Admin
import { AdminComponent } from './pages/admin/admin.component';
import { AdminInfoComponent } from './pages/admin/admin-info/admin-info.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AdminAddressComponent } from './pages/admin/admin-address/admin-address.component';

// Admin Store
import { StoreDashboardComponent } from './pages/admin/store-dashboard/store-dashboard.component';
import { StoreProfileComponent } from './pages/admin/store-profile/store-profile.component';
import { StoreItemsComponent } from './pages/admin/store-items/store-items.component';
import { StoreCategoriesComponent } from './pages/admin/store-categories/store-categories.component';
import { StoreOrdersComponent } from './pages/admin/store-orders/store-orders.component';
import { StoreRegisterComponent } from './pages/marketplace/store-register/store-register.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item', component: ItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'category/:id', component: CategoryComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'store/:id', component: StoreComponent },
    { path: 'promo', component: PromosComponent },
    { path: 'tyc', component: TerminosYcondicionesComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'storeRegister', component: StoreRegisterComponent },
    { path: 'check', component: CheckoutComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            // Perfil usuario
            {
                path: '',
                component: AdminInfoComponent
            },
            {
                path: 'my-info',
                component: AdminInfoComponent
            },
            {
                path: 'my-orders',
                component: AdminOrdersComponent
            },
            {
                path: 'my-address',
                component: AdminAddressComponent
            },
            // Tienda
            {
                path: 'my-store-dashboard',
                component: StoreDashboardComponent
            },
            {
                path: 'my-store-profile',
                component: StoreProfileComponent
            },
            {
                path: 'my-store-items',
                component: StoreItemsComponent
            },
            {
                path: 'my-store-categories',
                component: StoreCategoriesComponent
            },
            {
                path: 'my-store-orders',
                component: StoreOrdersComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
