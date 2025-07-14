import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Drink } from '../../models/drink.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss'],
})
export class DrinkCardComponent {
  @Input() drink!: Drink;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  addToCart(): void {
    this.cartService.addToCart(this.drink);
    this.snackBar.open(`${this.drink.name} added to cart`, 'Close', {
      duration: 2000,
    });
  }
}
