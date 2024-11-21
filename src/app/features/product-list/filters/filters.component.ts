import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { Price, PriceRanges } from './price-ranges.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  filterForm: FormGroup;
  value = '';
  types: string[] = ['TVs', 'Appliances', 'Phones', 'Video Games', 'All'];
  priceRanges: PriceRanges[] = [
    { label: '$0 - $50', value: { gte: 0, lte: 50 } },
    { label: '$50 - $100', value: { gte: 50, lte: 100 } },
    { label: '$100 - $200', value: { gte: 100, lte: 200 } },
    { label: '$200+', value: { gte: 200, lte: 9999 } },
  ];

  @Output() filtersChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''],
      selectedType: ['All'],
      priceRanges: this.fb.array(
        this.priceRanges.map(() => this.fb.control(false))
      ),
    });

    this.filterForm.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe(() => {
        this.emitFilters();
      });
  }

  get priceRangeControls() {
    return (this.filterForm.get('priceRanges') as FormArray).controls;
  }

  getSelectedPriceRanges() {
    let selectedRanges: Price[] = [];
    this.filterForm.value.priceRanges.forEach(
      (checked: boolean, index: number) => {
        if (checked) {
          selectedRanges.push(this.priceRanges[index].value);
        }
      }
    );
    return selectedRanges;
  }

  emitFilters() {
    const selectedPriceRanges = this.getSelectedPriceRanges();
    console.log(selectedPriceRanges);
    this.filtersChanged.emit({
      ...this.filterForm.value,
      priceRanges: selectedPriceRanges,
    });
    console.log({
      ...this.filterForm.value,
      priceRanges: selectedPriceRanges,
    });
  }
}
