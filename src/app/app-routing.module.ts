import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HouseContentComponent } from './house-content/house-content.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'architecture',
    component: ArchitectureComponent,
  }, {
    path: 'house-content',
    component: HouseContentComponent,
  },{
    path: 'media',
    component: MediaComponent,
  },{
    path: 'about',
    component: AboutComponent,
  },{
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
