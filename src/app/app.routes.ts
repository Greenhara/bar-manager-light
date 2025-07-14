import { Routes } from '@angular/router';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', component: DrinkListComponent },
  { path: 'cart', component: CartComponent },

  { path: '**', redirectTo: '' },
];
