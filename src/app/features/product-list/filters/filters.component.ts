import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Output() filtersChange = new EventEmitter<any>();

  searchText: string = '';
  selectedType: string = 'All';
  selectedPrices: string[] = [];

  types: string[] = ['All', 'TVs', 'Appliances', 'Phones', 'Video Games'];
  priceRanges = [
    { label: '$0 - $100', value: '0-100' },
    { label: '$101 - $500', value: '101-500' },
    { label: '$501 - $1000', value: '501-1000' },
    { label: '$1001+', value: '1001+' },
  ];

  onPriceChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedPrices.push(checkbox.value);
    } else {
      this.selectedPrices = this.selectedPrices.filter(
        (price) => price !== checkbox.value
      );
    }
    this.onFilterChange();
  }

  onFilterChange(): void {
    this.filtersChange.emit({
      searchText: this.searchText,
      selectedType: this.selectedType,
      selectedPrices: this.selectedPrices,
    });
  }
}
