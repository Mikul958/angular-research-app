import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {
  color:string = "black";   // Current background color
  hex:string  = "#8A1DC9";  // Last valid hex code entered by the user; default purple from app theme.

  regex:RegExp = new RegExp(/^#[0-9A-F]{6}/i);  // Regex pattern for hex code

  // Updates the color in the outer box to the given parameter. If the parameter is "use-hex" it instead uses the current hex.
  updateColor(color: string) {
    if (color == "use-hex")
      this.color = this.hex;
    else
      this.color = color;
  }

  // Called when hex field is updated; only updates color if value in text field is a valid hex and Hex Code button is selected.
  validateHex() {
    // Exit function if entered hex is invalid
    if (!this.regex.test(this.hex))
      return;

    // Update background color if Hex Code: radio button is checked.
    let hexButton = document.getElementById("custom") as HTMLInputElement;
    if (hexButton != null && hexButton.checked) {
      this.updateColor("use-hex");
    }
    
  }
}
