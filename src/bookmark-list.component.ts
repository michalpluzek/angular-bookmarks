import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "bookmark-list",
  template: `
    <div class="card">
      <table class="table table-striped">
        <tr *ngFor="let bookmark of bookmarks">
          <td>
            <a [href]="bookmark.url" target="_blank"> {{ bookmark.title }}</a>
          </td>
          <td class="d-none d-lg-table-cell">
            {{ bookmark.url }}
          </td>
          <td>
            <button (click)="onEdit(bookmark)" class="btn btn-warning">
              <span class="bi-pencil"></span>
              <span class="d-none d-md-inline">Edytuj</span>
            </button>
            <button (click)="onRemove(bookmark)" class="btn btn-danger">
              <span class="bi-trash"></span>
              <span class="d-none d-md-inline">Usuń</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class BookmarkListComponent {
  @Input() bookmarks = [];
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();

  onRemove(bookmark) {
    this.remove.emit(bookmark);
  }

  onEdit(bookmark) {
    this.edit.emit(bookmark);
  }
}
