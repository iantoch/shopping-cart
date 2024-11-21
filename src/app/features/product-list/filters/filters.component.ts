import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  filterForm: FormGroup;
  types: string[] = ['TVs', 'Appliances', 'Phones', 'Video Games', 'All'];
  priceRanges = [
    { label: '$0 - $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: '$200+', value: '200+' },
  ];

  @Output() filtersChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: ['', [this.debounceSearchValidator()]],
      selectedType: ['All'],
      priceRanges: this.fb.array(
        this.priceRanges.map(() => this.fb.control(false))
      ),
    });

    this.filterForm.valueChanges.subscribe((values) => {
      this.filtersChanged.emit(values);
      console.log(values);
    });
  }

  debounceSearchValidator() {
    return (control: AbstractControl): Observable<string> => {
      return control.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged()
      );
    };
  }

  onSearch(searchText: string) {
    const filters = this.filterForm.value;
    this.filtersChanged.emit({
      ...filters,
      search: searchText,
    });
  }
}
