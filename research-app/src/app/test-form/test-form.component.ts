import { Component } from '@angular/core';

import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [FormComponent, TableComponent],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css'
})
export class TestFormComponent {
  submitted: boolean = false;
  responseFromForm: any;          // Received from FormComponent via EventEmitter, sent to TableComponent via @Input

  handleSubmit(response: {firstName: string, middleInitial: string, lastName: string, isStudent: boolean, data: Array<string>}) {
    this.responseFromForm = response;
    this.submitted = true;
  }
  handleBack() {
    this.submitted = false;
  }
}
