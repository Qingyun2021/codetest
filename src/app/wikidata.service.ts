import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikidataService {

  private apiUrl = 'http://localhost:9090/api/wikidata';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, { params: { query } });
  }

  getDetails(entityId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/details`, { params: { entityId } });
  }
}
