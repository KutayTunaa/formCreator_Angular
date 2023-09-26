import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'form-server/form.service';
import {
  IAnswers,
  IFormDefinition,
  IOptions,
  IQuestions,
  newAnswer1,
  newForm1,
} from '../form/iform-definition';

@Component({
  selector: 'app-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.scss'],
})
export class AnswerBoxComponent {
  formData: IFormDefinition;
  savedData: IFormDefinition[] = [];
  answer: IAnswers[] = [];
  answers: IAnswers[] = [];

  selectedOption: number | undefined;
  message: boolean = false;
  httpClient: any;
  formId: any;
  loading: any;

  constructor(private router: Router, private formService: FormService) {
    this.formData = newForm1();
  }

  goBack() {
    this.router.navigate(['/form']);
  }

  getFormId() {
    if (this.formId) {
      this.formService.getFormWithAnswers(this.formId).subscribe((response) => {
        console.log('Veri çekildi', response);
        this.formData = response;
      });
    }
  }

  radioSelected(optionId: number, question: IQuestions) {
    let answer: IAnswers = this.getAnswerByQuestionId(optionId, question);
    if (answer.optionId == -1) {
      let answersR: IAnswers[] = [];
      answer.optionId = optionId;
      answersR.push(answer);
      if (question.listAnswers != null)
        question.listAnswers = question.listAnswers.concat(answersR);
      else question.listAnswers = answersR;
    }
  }

  isChecked(optionId: number, question: IQuestions): boolean {
    let answer: IAnswers = this.getAnswerByQuestionId(optionId, question);
    if (answer.optionId == optionId) return true;
    else return false;
  }

  getAnswerByQuestionId(optionId: number, question: IQuestions): IAnswers {
    if (question.listAnswers != null && question.listAnswers.length > 0) {
      for (var answer of question.listAnswers) {
        if (answer.optionId == optionId) return answer;
      }
      let newAnswr: IAnswers = newAnswer1();
      newAnswr.formId = this.formData.id;
      newAnswr.questionId = question.id;
      return newAnswr;
    } else {
      let newAnswr: IAnswers = newAnswer1();
      newAnswr.formId = this.formData.id;
      newAnswr.questionId = question.id;
      return newAnswr;
    }
  }

  submitAnswer() {
    if (this.formData) {
      let listAnswers: IAnswers[] = [];

      if (this.formData.questions && this.formData.questions.length > 0) {
        for (var dtoQuestion of this.formData.questions) {
          if (dtoQuestion.listAnswers && dtoQuestion.listAnswers.length > 0) {
            if (dtoQuestion.questionType == '2') {
              let listAnswers2: IAnswers[] = [];
              for (var dtoA of dtoQuestion.listAnswers) {
                if (dtoA.optionId != null && dtoA.optionId != -1)
                  listAnswers2.push(dtoA);
              }
              listAnswers = listAnswers.concat(listAnswers2);
            } else listAnswers = listAnswers.concat(dtoQuestion.listAnswers);
          }
        }
        this.formService.submitAnswers(listAnswers).subscribe((response) => {
          console.log('Kaydedildi:', response);
        });
      }
    }
  }
}
