import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'form-server/form.service';
import { IAnswers, newAnswer1 } from '../form/iform-definition';

@Component({
  selector: 'app-saved-answers',
  templateUrl: './saved-answers.component.html',
  styleUrls: ['./saved-answers.component.scss']
})
export class SavedAnswersComponent {
  answer: IAnswers[] = [];
  answerData: IAnswers;
  answers: IAnswers[] = [];

  httpClient: any;
  answerId: any;

  constructor(private router: Router, private formService: FormService) {
    this.answerData = newAnswer1();
  }

  goBack() {
    this.router.navigate(['/form']);
  }

  getAnswerId() {}


  getAnswersById(){}
}

