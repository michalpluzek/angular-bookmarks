import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookmark } from 'src/app/model/bookmark.model';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.css'],
})
export class BookmarkEditComponent {
  @Input('bookmark') bookmarkProps: Bookmark = {} as Bookmark;

  @Output('clear') clearEvent: EventEmitter<Bookmark> =
    new EventEmitter<Bookmark>();
  @Output('save') saveEvent: EventEmitter<Bookmark> =
    new EventEmitter<Bookmark>();

  onClear(): void {
    this.clearEvent.emit();
  }

  onSave(): void {
    this.saveEvent.emit(this.bookmarkProps);
  }
}
