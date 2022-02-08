import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from '../model/bookmark.model';
import { map } from 'rxjs/operators';
import { pip } from 'ngx-bootstrap-icons';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private baseUrl =
    'https://angular2-test-bec85-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  errorHandler = (error: String) =>
    console.error('BookmarkService error', error);

  addBookmark(bookmark: Bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.post(`${this.baseUrl}bookmarks.json`, json);
  }

  updateBookmark({ id, title, url }: Bookmark) {
    const json = JSON.stringify({ title, url });
    return this.http.patch(`${this.baseUrl}bookmarks/${id}.json`, json);
  }

  removeBookmark({ id }: Bookmark) {
    return this.http.delete(`${this.baseUrl}bookmarks/${id}.json`);
  }

  getBookmarks() {
    return this.http
      .get(`${this.baseUrl}bookmarks.json`)
      .pipe(map((response) => this.convert(response)));
  }

  private convert(data: any) {
    const convertedResponse: Bookmark[] = [];
    for (let key in data) {
      const newBookamrk = {
        id: key,
        title: data[key].title,
        url: data[key].url,
      };
      convertedResponse.push(newBookamrk);
    }
    return convertedResponse.sort((a, b) => a.title.localeCompare(b.title));
  }
}
