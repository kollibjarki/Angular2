import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin/admin-main/admin.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { AdminProductGrid } from './admin/admin-product-grid/edit-delete-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LogInComponent } from './account/log-in/log-in.component';
import { SettingsComponent } from './account/settings/settings.component';
import { RegisterComponent } from './account/register/register.component';
import { ProductPopularComponent } from './product-popular/product-popular.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { BasketComponent } from './basket/basket.component';
import { AdminStaffGridComponent } from './admin/admin-staff-grid/admin-staff-grid.component';
import { StaffEditComponent } from './admin/staff-edit/staff-edit.component';
import { StaffNewComponent } from './admin/staff-new/staff-new.component';
const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: HomeComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'store/:category', component: CategoryComponent },
    { path: 'selection/popular', component: ProductPopularComponent },
    { path: 'selection/sale', component: ProductSaleComponent },
    { path: 'store/item/:id', component: ProductDetailComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/new', component: NewProductComponent },
    { path: 'admin/items', component: AdminProductGrid },
    { path: 'admin/edit/:id', component: EditProductComponent },
    { path: 'account/login', component: LogInComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: 'account/settings', component: SettingsComponent },
    { path: 'admin/newStaff', component: StaffNewComponent },
    { path: 'admin/editStaff/:id', component: StaffEditComponent },
    { path: 'edit/:id', component: SettingsComponent },
    { path: 'staff', component: AdminStaffGridComponent },
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
