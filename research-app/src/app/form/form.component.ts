import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  firstName: string = "";
  middleInitial: string = "";
  lastName: string = "";
  
  isStudent: boolean = true;

  checkedStudent: Array<boolean> = [false, false, false, false, false];
  checkedFaculty: Array<boolean> = [false, false, false, false];
  studentLabels: Array<string> = ["CSCE145", "CSCE490", "ENGL462", "MATH141", "STAT509"]
  facultyLabels: Array<string> = [
    "College of Engineering and Computing",
    "College of Arts and Sciences",
    "School of Music",
    "Darla Moore School of Business"
  ]

  // Event emitter, used to send data to TestFormComponent
  @Output() submitEvent = new EventEmitter<{firstName: string, middleInitial: string, lastName: string, isStudent: boolean, data: Array<string>}>();

  submitForm() {
    //let formResponse:string = this.firstName + "|" + this.middleInitial + "|" + this.lastName + "|";
    let formResponse = {
      firstName: this.firstName,
      middleInitial: this.middleInitial,
      lastName: this.lastName,
      isStudent: this.isStudent,
      data: ["temp"]
    }
    
    // Check for empty string in name fields
    if (formResponse.firstName == "")
      formResponse.firstName = "--";
    if (formResponse.middleInitial == "")
      formResponse.middleInitial = "--";
    if (formResponse.lastName == "")
      formResponse.lastName = "--";

    formResponse.data.pop()   // This is here because TypeScript documentation sucks
    if (this.isStudent) {
      for (let i=0; i<this.checkedStudent.length; i++) {
        if (this.checkedStudent[i])
          formResponse.data.push(this.studentLabels[i]);
      }
    }
    else {
      for (let i=0; i<this.checkedFaculty.length; i++) {
        if (this.checkedFaculty[i])
          formResponse.data.push(this.facultyLabels[i]);
      }
    }

    this.submitEvent.emit(formResponse);
  }
}
