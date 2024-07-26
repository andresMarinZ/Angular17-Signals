import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', router: 'counter' },
    { title: 'Usuario', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' },
  ]);
}
