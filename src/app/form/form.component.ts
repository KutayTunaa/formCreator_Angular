// form.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormService } from 'form-server/form.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from 'primeng/api';
import {
  IAnswers,
  IFormDefinition,
  IOptions,
  IQuestions,
  newForm1,
  newOptions1,
  newQuestion1,
} from './iform-definition';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  apiUrl = 'http://localhost:8090/api/v1/form_data';

  formData: IFormDefinition;
  savedData: IFormDefinition[] = [];

  currentTmpId: number = 1;
  currentOptId: number = 1;
  newQuestion: any;

  messages: Message[] = [];

  ngOnInit() {
    this.messages = [];
  }

  constructor(
    private formService: FormService,
    private http: HttpClient,
    private router: Router
  ) {
    this.formData = newForm1();
  }

  message: boolean = false;

  goToFormView() {
    this.router.navigate(['/form-view']);
  }

  getFormList(): Observable<IFormDefinition[]> {
    return this.http.get<IFormDefinition[]>(this.apiUrl);
  }

  addQuestion() {
    const newQuestion: IQuestions = newQuestion1();
    newQuestion.id = this.currentTmpId;
    this.currentTmpId = this.currentTmpId + 1;

    if (!this.formData.questions) {
      this.formData.questions = [];
    }

    this.formData.questions.push(newQuestion);
  }

  removeQuestion(questionIndex: number) {
    if (
      this.formData.questions &&
      this.formData.questions.length > questionIndex
    ) {
      this.formData.questions.splice(questionIndex, 1);
    }
  }

  removeOption(question: IQuestions, optionIndex: number) {
    if (question.options) {
      question.options.splice(optionIndex, 1);
    }
  }

  addOption(question: IQuestions) {
    const newOption: IOptions = newOptions1();
    newOption.id = this.currentOptId;
    this.currentOptId = this.currentOptId + 1;

    if (question.options == null) question.options = [];
    question.options.push(newOption);
  }

  test(event: any) {
    console.log(event);
  }

  submitForm() {
    if (this.formData && this.formData.questions) {
      const newForm: IFormDefinition = {
        title: this.formData.title || '',
        subTitle: this.formData.subTitle || '',
        questions: this.formData.questions.map((question) => {
          const newQuestion: IQuestions = {
            description: question.description || '',
            questionType: question.questionType || '1',
            options: (question.options || []).map((option: any) => {
              const newOption: IOptions = {
                description: option.description || '',
              };
              return newOption;
            }),
          };
          return newQuestion;
        }),
      };

      this.formService.submitFormData(this.formData).subscribe(
        (response) => {
          console.log('Veri sunucuya gönderildi:', response);
          this.formData = newForm1();
          this.message = true;

          this.messages = [
            {
              severity: 'success',
              summary: 'Success',
              detail: 'Form submitted successfully!',
            },
          ];
        },
        (error) => {
          console.error('Veri gönderimi başarısız:', error);

          this.messages = [
            {
              severity: 'error',
              summary: 'Error',
              detail: 'Form submission failed. Please try again later.',
            },
          ];
        }
      );
    }
  }
}
