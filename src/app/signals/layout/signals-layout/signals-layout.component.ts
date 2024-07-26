import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SideMenuComponent],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.scss'
})
export class SignalsLayoutComponent {

}
