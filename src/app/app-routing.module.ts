import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectureComponent } from './architecture/architecture.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'architecture',
    component: ArchitectureComponent,
  },{
    path: 'media',
    component: MediaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
