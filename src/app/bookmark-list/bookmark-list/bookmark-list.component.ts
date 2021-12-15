import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookmark } from 'src/app/model/bookmark.model';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css'],
})
export class BookmarkListComponent {
  @Input() bookmarks: { id?: string; url: string; title: string }[] = [];

  @Output() edit: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();
  @Output() remove: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  onEdit(bookmark: Bookmark) {
    this.edit.emit(bookmark);
  }

  onRemove(bookmark: Bookmark) {
    this.remove.emit(bookmark);
  }
}
