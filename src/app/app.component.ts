import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shopping-cart';
}
