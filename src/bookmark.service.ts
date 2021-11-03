import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";

@Injectable()
export class BookmarkService {
  private baseUrl =
    "https://angular2-test-bec85-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: Http) {}

  addBookmark(bookmark) {
    const bookmarkJSON = JSON.stringify(bookmark);
    return this.http
      .post(`${this.baseUrl}bookmarks.json`, bookmarkJSON)
      .toPromise();
  }

  getBookmarks() {
    return this.http
      .get(`${this.baseUrl}bookmarks.json`)
      .toPromise()
      .then((response) => this.convert(response.json()));
  }

  removeBookmark(bookmark) {
    return this.http
      .delete(`${this.baseUrl}bookmarks/${bookmark.id}.json`)
      .toPromise();
  }

  private convert(responseToConvert) {
    return Object.keys(responseToConvert)
      .map((id) => ({
        id: id,
        title: responseToConvert[id].title,
        url: responseToConvert[id].url,
      }))
      .sort((a, b) => b.title.localeCompare(a.title));
  }
}
