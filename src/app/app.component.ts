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
    bookmarkService.errorHandler = (error) =>
      window.alert('Serwer nie odpowiada');
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
      this.bookmarkService.updateBookmark(bookmark).subscribe(
        () => this.reload(),
        (error) => this.bookmarkService.errorHandler(error)
      );
    } else {
      this.bookmarkService.addBookmark(bookmark).subscribe(
        () => this.reload(),
        (error) => this.bookmarkService.errorHandler(error)
      );
    }
    this.clear();
  }

  remove(bookmark: Bookmark): void {
    this.bookmarkService.removeBookmark(bookmark).subscribe(
      () => this.reload(),
      (error) => this.bookmarkService.errorHandler(error)
    );
  }

  private reload(): void {
    this.bookmarkService
      .getBookmarks()
      .subscribe((bookmarks) => (this.bookmarks = bookmarks));
  }
}
