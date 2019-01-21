import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentViewComponent } from 'src/app/content-view/content-view.component';
import { ContentResolver } from './content.resolver';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '**',
    resolve: { contentString: ContentResolver },
    component: ContentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
