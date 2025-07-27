import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/drink.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: CartItem[] = [];
  orderConfirmed = false;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  getTotal(): string {
    const total = this.items.reduce((sum, item) => {
      const price = parseFloat(item.drink.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);
    return `$${total.toFixed(2)}`;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  checkout(): void {
    this.orderConfirmed = true;
    this.clearCart();
  }
}
