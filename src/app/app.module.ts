import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './shared/app-routing.module';
import 'rxjs/Rx';
//Material
import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import 'hammerjs';
//Services
import { GlobalService } from './shared/global.service';
import { ValueService } from './shared/value.service';
import { ProductService } from './shared/product.service';
import { AccountService } from './shared/account.service';
import { AdminService } from './shared/admin.service';
import { BasketService } from './shared/basket.service';
import { CommentService } from './shared/comment.service';
import { OrdersService } from './shared/orders.service';
import { StaffService } from './shared/staff.service';
import { DialogService } from './shared/dialog.service';
//Pipes
import { SearchPipe } from './search-bar/search-filter.pipe';
//Components
import { AppComponent } from './app.component';
import { AccountTabComponent } from './account-tab/account-tab.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { InfoMenuComponent } from './info-menu/info-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesGridComponent } from './categories-grid/categories-grid.component';
import { CategoriesSmallComponent } from './categories-small/categories-small.component';
import { CategoriesSmallBurgerComponent } from './categories-small-burger/categories-small-burger.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommentsComponent } from './comments/comments.component';
import { RateProductComponent } from './rate-product/rate-product.component';
import { RatingShowComponent } from './rating-show/rating-show.component';
import { EmployeesGridComponent } from './employees-grid/employees-grid.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
//Basket And Orders
import { BasketPreviewComponent } from './basket/basket-preview/basket-preview.component';
import { BasketComponent } from './basket/basket.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
//Dialogs
import { DynamicDialogComponent } from './dialogs/dynamic-dialog/dynamic-dialog.component';
import { AboutDialogComponent } from './dialogs/about-dialog/about-dialog.component';
import { ContactDialogComponent } from './dialogs/contact-dialog/contact-dialog.component';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './dialogs/register-dialog/register-dialog.component';
import { ChangePasswordDialogComponent } from './dialogs/change-password-dialog/change-password-dialog.component';
import { NewProductDialogComponent } from './dialogs/new-product-dialog/new-product-dialog.component';
import { NewEmployeeDialogComponent } from './dialogs/new-employee-dialog/new-employee-dialog.component';
import { DisabledProductDialogComponent } from './dialogs/disabled-product-dialog/disabled-product-dialog.component';
//Admin
import { ProductEditComponent } from './product-edit/product-edit.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    SearchPipe,
    //Misc
    AppComponent,
    AccountTabComponent,
    LogoComponent,
    MenuComponent,
    InfoMenuComponent,
    FooterComponent,
    SearchBarComponent,
    //Categories
    CategoriesGridComponent,
    CategoriesSmallComponent,
    CategoriesSmallBurgerComponent,
    //Products
    ProductGridComponent,
    ProductDetailComponent,
    ProductDetailsComponent,
    CommentsComponent,
    RateProductComponent,
    RatingShowComponent,
    //Basket and Orders
    BasketPreviewComponent,
    BasketComponent,
    OrdersComponent,
    PaymentComponent,
    //Admin
    ProductEditComponent,
    EmployeeEditComponent,
    //Staff
    EmployeeDetailsComponent,
    EmployeesGridComponent,
    //Dialogs
    DynamicDialogComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    ContactDialogComponent,
    ChangePasswordDialogComponent,
    NewProductDialogComponent,
    NewEmployeeDialogComponent,
    AboutDialogComponent,
    ItemGridComponent,
    DisabledProductDialogComponent,
    CommentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    MdDialogModule.forRoot()
  ],
  providers: [  GlobalService,
                ValueService,
                ProductService,
                AccountService,
                AdminService,
                BasketService,
                CommentService,
                OrdersService,
                StaffService,
                DialogService,
                ],
  bootstrap: [  AppComponent  ],
  entryComponents: [ DynamicDialogComponent, 
                     AboutDialogComponent,
                     ContactDialogComponent,
                     LoginDialogComponent,
                     RegisterDialogComponent,
                     ChangePasswordDialogComponent,
                     NewProductDialogComponent,
                     NewEmployeeDialogComponent,
                     DisabledProductDialogComponent
                      ]
})
export class AppModule { }
