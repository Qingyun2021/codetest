import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WikidataService } from '../wikidata.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  destroyRef = inject(DestroyRef)
  entityDetails: any;
  constructor(
    private route: ActivatedRoute,
    private wikidataService: WikidataService,
    private router: Router
  ) {}

  ngOnInit() {

    const subscription = this.route.paramMap.subscribe(params => {
      const entityId = params.get('id');
      if (entityId) {
        this.wikidataService.getDetails(entityId).subscribe(response => {
          this.entityDetails = response.entities[entityId];
          console.log(this.entityDetails)
        });
      }
    });
    this.destroyRef.onDestroy(()=>subscription.unsubscribe())


  }

  getProperties() {
    if (!this.entityDetails || !this.entityDetails.claims) {
      return [];
    }
  
    const properties = [];
    const claims = this.entityDetails.claims;

    for (const propertyId in claims) {
      const property = claims[propertyId][0];
  
      properties.push({
        name: propertyId,
        value: property.mainsnak.datavalue?.value || 'No value available'
      });
    }
  
    return properties;
  }

  onGoBack(){
    this.router.navigate(['/'])
  }
}
