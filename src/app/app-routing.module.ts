import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormComponent } from './form/form.component';
import { SavedAnswersComponent } from './saved-answers/saved-answers.component';


const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'form-view', component: FormViewComponent }, 
  { path: 'answer-box', component: AnswerBoxComponent},
  { path: 'saved-answers', component: SavedAnswersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

