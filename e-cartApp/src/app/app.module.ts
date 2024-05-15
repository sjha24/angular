import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { ProducrListComponent } from './container/producr-list/producr-list.component';
import { ProductComponent } from './container/producr-list/product/product.component';
import { FilterComponent } from './container/producr-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { FeatureBrandsComponent } from './container/feature-brands/feature-brands.component';  



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MainMenuComponent,
    ContainerComponent,
    ProducrListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeatureBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
