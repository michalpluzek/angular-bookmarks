import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookmark } from 'src/app/model/bookmark.model';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.css'],
})
export class BookmarkEditComponent {
  @Input() bookmark: Bookmark = {} as Bookmark;

  @Output() clear: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();
  @Output() save: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  onClear(): void {
    this.clear.emit();
  }

  onSave(): void {
    this.save.emit(this.bookmark);
  }
}
