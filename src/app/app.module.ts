import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
//Services
import { ProductService } from './product.service';
import { AdminService } from './admin.service';
import { AccountService } from './account.service';
import { BasketService } from './basket.service';
import { CommentService } from './comment.service';
import { ProductSearchService } from './product-search.service';
import { StaffService } from './staff.service';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin-main/admin.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { AdminProductGrid } from './admin/admin-product-grid/edit-delete-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavburgerComponent } from './navburger/navburger.component';
import { AccountHudComponent } from './account-hud/account-hud.component';
import { RegisterComponent } from './account/register/register.component';
import { SettingsComponent } from './account/settings/settings.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LogInComponent } from './account/log-in/log-in.component';
import { ProductPopularComponent } from './product-popular/product-popular.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { CategoriesSmallComponent } from './categories-small/categories-small.component';
import { ProductSearchBarComponent } from './product-search-bar/product-search-bar.component';
import { BasketComponent } from './basket/basket.component';
import { RateProductComponent } from './rate-product/rate-product.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import { RatingShowComponent } from './rating-show/rating-show.component';
import { StaffEditComponent } from './admin/staff-edit/staff-edit.component';
import { StaffNewComponent } from './admin/staff-new/staff-new.component';
import { AdminStaffGridComponent } from './admin/admin-staff-grid/admin-staff-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NewProductComponent,
    AdminProductGrid,
    EditProductComponent,
    NavbarComponent,
    NavburgerComponent,
    AccountHudComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductDetailComponent,
    LogInComponent,
    RegisterComponent,
    SettingsComponent,
    ProductPopularComponent,
    CategoriesSmallComponent,
    ProductSearchBarComponent,
    BasketComponent,
    ProductSaleComponent,
    RateProductComponent,
    FooterComponent,
    CommentsComponent,
    RatingShowComponent,
    StaffEditComponent,
    StaffNewComponent,
    AdminStaffGridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ ProductService,
               AdminService, 
               AccountService, 
               BasketService,
               CommentService, 
               ProductSearchService,
               StaffService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
