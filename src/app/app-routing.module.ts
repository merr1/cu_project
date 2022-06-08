import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogComponent } from './blog/blog.component';
import { DiscussEuComponent } from './discuss-eu/discuss-eu.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ResearchEuComponent } from './research-eu/research-eu.component';
import { StaffPageComponent } from './staff-page/staff-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'staff',
    component: StaffPageComponent,
  },
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: 'researchEu',
    component: ResearchEuComponent,
  },
  {
    path: 'staff',
    component: StaffPageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'discuss-eu',
    component: DiscussEuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
