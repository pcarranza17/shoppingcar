import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/product/list/list.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: ProductComponent,  pathMatch: 'full',
        children: [
            {
                path: '',
                component: ListComponent
            }
        ]
    },
    { path: 'product/:id', component: DetailComponent,  pathMatch: 'full'},
    { path: 'shoppingcar', component: ShoppingCartComponent,  pathMatch: 'full'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
