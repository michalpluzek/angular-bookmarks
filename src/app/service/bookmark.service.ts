import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from '../model/bookmark.model';

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
    return this.http
      .post(`${this.baseUrl}bookmarks.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateBookmark({ id, title, url }: Bookmark) {
    const json = JSON.stringify({ title, url });
    return this.http
      .patch(`${this.baseUrl}bookmarks/${id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  removeBookmark({ id }: Bookmark) {
    return this.http
      .delete(`${this.baseUrl}bookmarks/${id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  getBookmarks() {
    return this.http
      .get(`${this.baseUrl}bookmarks.json`)
      .toPromise()
      .then((response) => this.convert(response));
  }

  private convert(response: any) {
    return Object.keys(response)
      .map((id) => ({
        id,
        title: response[id].title,
        url: response[id].url,
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }
}
