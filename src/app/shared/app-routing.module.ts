import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CategoriesGridComponent } from '../categories-grid/categories-grid.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import { BasketComponent } from '../basket/basket.component';
import { OrdersComponent } from '../orders/orders.component';
import { PaymentComponent } from '../payment/payment.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { EmployeesGridComponent } from '../employees-grid/employees-grid.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { ItemGridComponent } from '../item-grid/item-grid.component';

const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: CategoriesGridComponent },
    { path: 'selection/:category', component: ProductGridComponent },
    { path: 'store/item/:id', component: ProductDetailsComponent },
    { path: 'item/edit/:id', component: ProductEditComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'staff', component: EmployeesGridComponent },
    { path: 'staff/:id', component: EmployeeDetailsComponent },
    { path: 'staff/edit/:id', component: EmployeeEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
