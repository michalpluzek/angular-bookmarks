import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Bookmark } from "./bookmark.model";

@Component({
  selector: "bookmark-list",
  template: `
    <div class="card">
      <table class="table table-striped">
        <tr *ngFor="let bookmark of bookmarks">
          <td>
            <a [href]="bookmark.url" target="_blank"> {{ bookmark.title }}</a>
          </td>
          <td>
            <button (click)="onRemove(bookmark)" class="btn btn-danger">
              Usuń
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class BookmarkListComponent {
  @Input() bookmarks: Bookmark[];
  @Output() remove = new EventEmitter();

  onRemove(bookmark) {
    this.remove.emit(bookmark);
  }
}
