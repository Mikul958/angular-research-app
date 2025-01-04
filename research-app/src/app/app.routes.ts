import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { RepeatBackComponent } from './repeat-back/repeat-back.component';
import { TestFormComponent } from './test-form/test-form.component';

// Pages for the Angular router, from left to right.      TODO figure out how to make app launch on about page
export const routes: Routes = [
    {
        path: "",
        redirectTo: "about",    // Automatically redirects user to About page when app is loaded
        pathMatch: "full"       // Note: required for some reason
    },
    {
        title: "About",             // Title for the page
        path: "about",              // Folder to look in (relative to current folder, app)
        component: AboutComponent   // Component to render
    },
    {
        title: "Calculator",
        path: "calculator",
        component: CalculatorComponent
    },
    {
        title: "Color Picker",
        path: "color-picker",
        component: ColorPickerComponent
    },
    {
        title: "Repeat Back",
        path: "repeat-back",
        component: RepeatBackComponent
    },
    {
        title: "Test Form",
        path: "test-form",
        component: TestFormComponent
    }
];
