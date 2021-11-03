import { Component } from "@angular/core";
import { Bookmark } from "./bookmark.model";
import { BookmarkService } from "./bookmark.service";

@Component({
  selector: "bookmark-app",
  template: `
    <bookmark-edit (save)="save($event)"></bookmark-edit>
    <bookmark-list [bookmarks]="bookmarks"></bookmark-list>
  `,
})
export class AppComponent {
  bookmarks: Bookmark[];

  constructor(private bookmarksService: BookmarkService) {
    this.reload();
  }

  save(bookmark) {
    this.bookmarksService.addBookmark(bookmark).then(() => this.reload());
  }

  private reload() {
    return this.bookmarksService
      .getBookmarks()
      .then((bookmarks) => (this.bookmarks = bookmarks));
  }
}
