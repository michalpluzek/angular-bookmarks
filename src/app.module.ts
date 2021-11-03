import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BookmarkService } from "./bookmark.service";
import { AppComponent } from "./app.component";
import { BookmarkListComponent } from "./bookmark-list.component";
import { BookmarkEditComponent } from "./bookmark-edit.component";

@NgModule({
  declarations: [AppComponent, BookmarkListComponent, BookmarkEditComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [BookmarkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
