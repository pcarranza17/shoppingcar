import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/product/list/list.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListComponent,
    DetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
