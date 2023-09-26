import { Component, OnInit } from '@angular/core'; 
import { FormService } from 'form-server/form.service';
import { IFormDefinition } from '../form/iform-definition';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})

export class FormListComponent { 

    apiUrl = 'http://localhost:8090/api/v1/form_data';

  formData: IFormDefinition[] | undefined;

  constructor(private formService: FormService) {}

}
