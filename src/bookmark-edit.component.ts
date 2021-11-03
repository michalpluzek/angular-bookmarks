import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "bookmark-edit",
  template: `
    <div class="card">
      <div class="card-body">
        <input
          [(ngModel)]="bookmark.title"
          type="text"
          placeholder="tytuł"
          style="width:25%"
        />
        <input
          [(ngModel)]="bookmark.url"
          type="text"
          placeholder="url"
          style="width:50%"
        />
        <button (click)="onSave()" class="btn btn-primary">Zapisz</button>
        <button (click)="onClear()" class="btn btn-success">Wyczyść</button>
      </div>
    </div>
  `,
})
export class BookmarkEditComponent {
  @Input() bookmark = {};

  @Output() save = new EventEmitter();
  @Output() clear = new EventEmitter();

  onSave() {
    this.save.emit(this.bookmark);
  }

  onClear() {
    this.clear.emit();
  }
}
