import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  template: `
    <h2>Klienci</h2>
    <ul>
      <li *ngFor="let customer of service.getCustomers()" (click)="goToDetails(customer.id)">
        {{ customer.name }} ({{ customer.email }})
      </li>
    </ul>
  `,
})
export class CustomerListComponent {
  constructor(public service: CustomerService, private router: Router) {}

  goToDetails(id: number) {
    this.router.navigate(['/customer', id]);
  }
}
