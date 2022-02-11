import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookmark } from 'src/app/model/bookmark.model';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css'],
})
export class BookmarkListComponent {
  @Input('bookmarks') bookmarksProps$!: Observable<Bookmark[]>;

  @Output('edit') editEvent: EventEmitter<Bookmark> =
    new EventEmitter<Bookmark>();
  @Output('remove') removeEvent: EventEmitter<Bookmark> =
    new EventEmitter<Bookmark>();

  onEdit(bookmark: Bookmark): void {
    this.editEvent.emit(bookmark);
  }

  onRemove(bookmark: Bookmark): void {
    this.removeEvent.emit(bookmark);
  }
}
