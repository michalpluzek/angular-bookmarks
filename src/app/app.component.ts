import { Component } from '@angular/core';
import { Bookmark } from './model/bookmark.model';
import { BookmarkService } from './service/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bookmarks: Bookmark[] = [];
  editableBookmark: Bookmark = {} as Bookmark;

  constructor(private bookmarkService: BookmarkService) {
    this.reload();
  }

  clear() {
    this.editableBookmark = {} as Bookmark;
  }

  edit({ id, title, url }: Bookmark) {
    this.editableBookmark = { id, title, url };
  }

  save(bookmark: Bookmark): void {
    if (bookmark.id) {
      this.bookmarkService.updateBookmark(bookmark).then(() => this.reload());
    } else {
      this.bookmarkService.addBookmark(bookmark).then(() => this.reload());
    }
    this.clear();
  }

  remove(bookmark: Bookmark): void {
    this.bookmarkService.removeBookmark(bookmark).then(() => this.reload());
  }

  private reload(): void {
    this.bookmarkService
      .getBookmarks()
      .then((bookmarks) => (this.bookmarks = bookmarks));
  }
}
