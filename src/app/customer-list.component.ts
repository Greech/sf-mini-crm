import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  template: `
    <mat-card style="margin: 24px; padding: 16px;">
      <h2>Klienci</h2>
      <mat-list>
        <mat-list-item *ngFor="let customer of service.getCustomers()" (click)="goToDetails(customer.id)" style="cursor:pointer;">
          <mat-icon matListIcon fontSize="small" style="font-size: 20px;">person</mat-icon>
          <div matLine>{{ customer.name }}</div>
          <div matLine>{{ customer.email }}</div>
        </mat-list-item>
      </mat-list>
    </mat-card>
  `,
})
export class CustomerListComponent {
  constructor(public service: CustomerService, private router: Router) {}

  goToDetails(id: number) {
    this.router.navigate(['/customer', id]);
  }
}
