import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// Main component for the app, contains navigation bar and routing information.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'research-app';
}
