import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FrontComponent } from './front/front.component';
import { DetailsComponent } from './details/details.component'; 

const routes: Routes = [
  { path: 'profile', component: ProfileEditorComponent },
      { path: '', component: FrontComponent },
      { path: 'name', component: NameEditorComponent },
      { path: 'detail', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ProfileEditorComponent,FrontComponent,NameEditorComponent,DetailsComponent]
