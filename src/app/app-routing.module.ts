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
import { StoreProfileComponent } from './pages/admin/store-profile/store-profile.component';
import { StoreItemsComponent } from './pages/admin/store-items/store-items.component';
import { StoreCategoriesComponent } from './pages/admin/store-categories/store-categories.component';
import { StoreOrdersComponent } from './pages/admin/store-orders/store-orders.component';
import { StoreRegisterComponent } from './pages/admin/store-register/store-register.component';
import { StoreItemsFormComponent } from './pages/admin/store-items-form/store-items-form.component';
import { StoreCategoriesFormComponent } from './pages/admin/store-categories-form/store-categories-form.component';
import { StoreLocationsFormComponent } from './pages/admin/store-locations-form/store-locations-form.component';
import { StoreLocationsComponent } from './pages/admin/store-locations/store-locations.component';
import { AdminSocialNetworksComponent } from './pages/admin/store-social-networks/admin-social-networks.component';
import { StoreSocialFormComponent } from './pages/admin/store-social-form/store-social-form.component';
import { StoreOrderDetailsComponent } from './pages/admin/store-orders-details/store-order-details.component';
import { StoreDashboardComponent } from './pages/admin/store-dashboard/store-dashboard.component';
import { ProductInformationComponent } from './pages/marketplace/product-information/product-information.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item/:id', component: ItemComponent },
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
    { path: 'checkout/:id/:index', component: CheckoutComponent },
    { path: 'produc-info/:idStore/:id', component: ProductInformationComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
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
                path: 'my-store',
                component: StoreDashboardComponent
            },
            {
                path: 'my-store-profile',
                component: StoreProfileComponent
            },
            {
                path: 'my-store-items',
                component: StoreItemsComponent,
            },
            {
                path: 'my-store-items/form',
                component: StoreItemsFormComponent,
            },
            {
                path: 'my-store-items/form/:id',
                component: StoreItemsFormComponent,
            },
            {
                path: 'my-store-categories',
                component: StoreCategoriesComponent
            },
            {
                path: 'my-store-categories/form',
                component: StoreCategoriesFormComponent,
            },
            {
                path: 'my-store-categories/form/:id',
                component: StoreCategoriesFormComponent,
            },
            {
                path: 'my-store-orders',
                component: StoreOrdersComponent
            },
            {
                path: 'my-store-ordersDetails/:id',
                component: StoreOrderDetailsComponent
            },
            {
                path: 'new-store',
                component: StoreRegisterComponent
            },
            {
                path: 'my-store-locations',
                component: StoreLocationsComponent
            },
            {
                path: 'my-store-locations/form',
                component: StoreLocationsFormComponent
            },
            {
                path: 'my-store-locations/form/:id',
                component: StoreLocationsFormComponent
            },
            {
                path: 'my-store-social',
                component: AdminSocialNetworksComponent
            },
            {
                path: 'my-store-social/form',
                component: StoreSocialFormComponent
            },
            {
                path: 'my-store-social/form/:id',
                component: StoreSocialFormComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
