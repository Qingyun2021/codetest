import { Component, DestroyRef, inject } from '@angular/core';
import { WikidataService } from '../wikidata.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery = '';
  searchResults: any[] = [];
  destryRef = inject(DestroyRef)
  constructor(private wikidataService: WikidataService, private router: Router) {}

  onSearch() {
    const subscription = this.wikidataService.search(this.searchQuery).subscribe(response => {
      this.searchResults = response.search || [];
    });
    this.destryRef.onDestroy(()=>subscription.unsubscribe())
  }

  viewDetails(entityId: string) {
    this.router.navigate(['/details', entityId]);
  }
}
