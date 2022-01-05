import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { checkLg, pencil, trash, xLg } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { BookmarkService } from './service/bookmark.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkEditComponent } from './components/bookmark-edit/bookmark-edit.component';

const icons = {
  checkLg,
  pencil,
  trash,
  xLg,
};

@NgModule({
  declarations: [AppComponent, BookmarkListComponent, BookmarkEditComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
