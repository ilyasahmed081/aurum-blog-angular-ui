import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { BlogAddEditComponent } from './blog-add-edit/blog-add-edit.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: '',
        component: BlogListingComponent
      },
      {
        path: 'blog-listing',
        component: BlogListingComponent
      },
      {
        path: 'blog-add-edit',
        component: BlogAddEditComponent
      },
      {
        path: 'blog-details',
        component: BlogDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
