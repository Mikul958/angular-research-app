import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LowerCasePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-repeat-back',
  standalone: true,
  imports: [FormsModule, LowerCasePipe, UpperCasePipe],
  templateUrl: './repeat-back.component.html',
  styleUrl: './repeat-back.component.css'
})
export class RepeatBackComponent {
  userInput: string = '';
  displayedString: string = "type something...";

  // Called any time the textarea is updated with user input
  updateString() {
    if (this.userInput == "") {
      this.displayedString = "type something...";
    }
    else {
      this.displayedString = this.userInput;
    }
  }
}
