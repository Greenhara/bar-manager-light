import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';
import { CartItem } from '../models/drink.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(drink: Drink): void {
    const existingItem = this.items.find((item) => item.drink.id === drink.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ drink, quantity: 1 });
    }
    this.updateCartCount();
  }

  clearCart(): void {
    this.items = [];
    this.updateCartCount();
  }

  private updateCartCount(): void {
    const total = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCountSubject.next(total);
  }
}
