import { Injectable } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { YoutubeItem } from '@app/models/google-response.model';
import { GridItem } from '@models/grid-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { mock } from './http/mock/mock.http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly urlFormat = 'https://www.youtube.com/watch?v=';

  constructor(private api: HttpService) {}

  /**
   * There is a day limit for api calls. Use it for it
   */
  getTestData() {
    return mock.pipe(
      map(googleResponse => {
        return googleResponse.items;
      })
    );
  }
  /**
   * Fetch data from provided link
   */
  getData(): Observable<YoutubeItem[]> {
    return this.api.getData().pipe(
      map(googleResponse => {
        return googleResponse.items;
      })
    );
  }

  /**
   * Formate data for rows
   */
  getFormateData(): Observable<GridItem[]> {
    // return this.getData().pipe(
    return this.getTestData().pipe(
      map(youtubeItems => {
        return youtubeItems.map(youtubeItem => {
          const snippet = youtubeItem.snippet;
          return new GridItem(
            snippet.thumbnails.default.url,
            moment(snippet.publishedAt).format('DD-MMM-YYYY HH:mm'),
            this.urlFormat.concat(youtubeItem.id.videoId),
            snippet.description
          );
        });
      })
    );
  }
}
