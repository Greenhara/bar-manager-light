import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../../models/drink.model';
import { CommonModule } from '@angular/common';
import { DrinkCardComponent } from '../drink-card/drink-card.component';

@Component({
  selector: 'app-drink-list',
  standalone: true,
  imports: [CommonModule, DrinkCardComponent],
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Drink[]>('assets/data/drinks.json').subscribe({
      next: (data) => (this.drinks = data),
      error: (err) => console.error('Error loading drinks:', err),
    });
  }
}
