import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleResponse } from '@models/google-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly googleApi = 'https://www.googleapis.com/youtube/v3/';
  private readonly key = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
  private readonly options = 'maxResults=50&type=video&part=snippet&q=john';
  private readonly url = `${this.googleApi}search?key=${this.key}&${this.options}`;

  constructor(private http: HttpClient) {}

  getData(): Observable<GoogleResponse> {
    return this.http.get<GoogleResponse>(this.url);
  }
}
