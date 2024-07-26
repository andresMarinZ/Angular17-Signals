import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';
import { catchError, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss',
})
export class UserInfoPageComponent implements OnInit {
  private userServiceService = inject(UserServiceService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.userServiceService
      .getUserById(id)
      .subscribe({
        next: (user) =>{this.currentUser.set(user)
          this.userWasFound.set(true);
        },
        error:(error)=>{
          this.currentUser.set(undefined);
          this.userWasFound.set(false);
        }    
      })
  }
}
