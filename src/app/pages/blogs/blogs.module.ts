import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogAddEditComponent } from './blog-add-edit/blog-add-edit.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent,
    BlogAddEditComponent,
    BlogListingComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
