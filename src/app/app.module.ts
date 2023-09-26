import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormService } from 'form-server/form.service';
import { FormListComponent } from './form-list/form-list.component';
import { FormViewComponent } from './form-view/form-view.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { SavedAnswersComponent } from './saved-answers/saved-answers.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FormComponent,
    FormListComponent,
    FormViewComponent,
    AnswerBoxComponent,
    SavedAnswersComponent,
    
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    InputNumberModule,
    MessagesModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
