import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'form-server/form.service';
import { IFormDefinition, newForm1 } from '../form/iform-definition';


@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html'
})
export class FormViewComponent {
  httpClient: any;
  formId:any;
  formData: IFormDefinition ;

  constructor(private router: Router, private formService: FormService) {
    this.formData = newForm1();
  }

  goBack() {
    this.router.navigate(['/form']);
  }

  getFormId(){
      if (this.formId ) {
       
        this.formService.getFormData(this.formId).subscribe((response)=>{
          console.log('Veri çekildi', response);
          this.formData = response;
        });
      
    }
  }
 



}
