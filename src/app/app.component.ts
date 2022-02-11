import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Bookmark } from './model/bookmark.model';
import { BookmarkService } from './service/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  bookmarks$!: Observable<Bookmark[]>;
  editableBookmark: Bookmark = {} as Bookmark;
  bookmarksSubscription: Subscription = new Subscription();

  constructor(private bookmarkService: BookmarkService) {
    bookmarkService.errorHandler = (error) =>
      window.alert('Serwer nie odpowiada');
    this.reload();
  }

  ngOnDestroy(): void {
    this.bookmarksSubscription.unsubscribe();
  }

  clear(): void {
    this.editableBookmark = {} as Bookmark;
  }

  edit({ id, title, url }: Bookmark): void {
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
    this.bookmarksSubscription = this.bookmarkService
      .removeBookmark(bookmark)
      .subscribe(
        () => this.reload(),
        (error) => this.bookmarkService.errorHandler(error)
      );
  }

  private reload(): void {
    this.bookmarkService
      .getBookmarks()
      .pipe((bookmarks) => (this.bookmarks$ = bookmarks));
  }
}
