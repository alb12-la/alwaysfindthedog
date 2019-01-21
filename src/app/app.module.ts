import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { ContentResolver} from './content.resolver';
@NgModule({
  declarations: [
    AppComponent,
    ContentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ContentResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
