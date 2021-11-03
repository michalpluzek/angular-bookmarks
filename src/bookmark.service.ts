import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";

@Injectable()
export class BookmarkService {
  private baseUrl =
    "https://angular2-test-bec85-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: Http) {}

  getBookmarks() {
    return this.http
      .get(`${this.baseUrl}bookmarks.json`)
      .toPromise()
      .then((response) => this.convert(response.json()));
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
