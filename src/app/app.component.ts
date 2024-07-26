import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18';
}
