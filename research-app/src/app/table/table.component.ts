import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() formData: any;   // Imports form response from TestFormComponent (which gets the response from FormComponent)
  @Output() backEvent = new EventEmitter<string>();

  goBack() {
    this.backEvent.emit();
  }

  getDataHeader(): string {
    if (this.formData.isStudent)
      return "Taking Classes:";
    return "Teaching At:"
  }
  getData(): string {
    let data: string = "";
    for (let i=0; i < this.formData.data.length; i++)
      data += this.formData.data[i] + ", "

    if (data.length > 0)
      data = data.substring(0, data.length-2);
    else
      data = "none";

    return data;
  }
}
