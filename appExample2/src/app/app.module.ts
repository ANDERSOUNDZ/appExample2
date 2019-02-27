import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HomeAppCartComponent } from './home-app-cart/home-app-cart.component';
import { ShoppingCartComponent } from './home-app-cart/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './home-app-cart/products/products.component';
import { ProductosListItemsComponent } from './home-app-cart/productos-list-items/productos-list-items.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponent,
    ProductosListItemsComponent,
    HomeAppCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
