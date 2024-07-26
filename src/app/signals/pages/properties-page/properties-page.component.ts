import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed(
    () => `${this.user()?.first_name} ${this.user()?.last_name}`
  );

  onFieldUpdate(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    this.user.update((current) => ({
      ...current,
      [field]: value,
    }));

    // this.user.update((current) => ({}));

    
  }
}
