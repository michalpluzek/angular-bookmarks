import { Component } from "@angular/core";
import { BookmarkService } from "./bookmark.service";

@Component({
  selector: "bookmark-app",
  template: `
    <bookmark-edit
      [bookmark]="editableBookmark"
      (save)="save($event)"
      (clear)="clear()"
    ></bookmark-edit>
    <bookmark-list
      [bookmarks]="bookmarks"
      (remove)="remove($event)"
      (edit)="edit($event)"
    ></bookmark-list>
  `,
})
export class AppComponent {
  bookmarks = [];
  editableBookmark = {};

  constructor(private bookmarksService: BookmarkService) {
    bookmarksService.errorHandler = (error) =>
      window.alert("Serwer nie odpowiada");
    this.reload();
  }

  save(bookmark) {
    if (bookmark.id) {
      this.bookmarksService.updateBookmark(bookmark).then(() => this.reload());
    } else {
      this.bookmarksService.addBookmark(bookmark).then(() => this.reload());
    }
    this.clear();
  }

  remove(bookmark) {
    return this.bookmarksService
      .removeBookmark(bookmark)
      .then(() => this.reload());
  }

  edit(bookmark) {
    return (this.editableBookmark = Object.assign({}, bookmark));
  }

  clear() {
    this.editableBookmark = {};
  }

  private reload() {
    return this.bookmarksService
      .getBookmarks()
      .then((bookmarks) => (this.bookmarks = bookmarks));
  }
}
