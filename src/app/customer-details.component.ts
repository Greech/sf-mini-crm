import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-details',
  template: `
    <div *ngIf="customer">
      <h2>{{ customer.name }}</h2>
      <p>{{ customer.email }}</p>

      <h3>Notatki</h3>
      <ul>
        <li *ngFor="let note of customer.notes">{{ note }}</li>
      </ul>

      <input [(ngModel)]="newNote" />
      <button (click)="addNote()">Dodaj notatkę</button>
    </div>
  `,
})
export class CustomerDetailsComponent {
  customer: any;
  newNote = '';

  constructor(private route: ActivatedRoute, private service: CustomerService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = this.service.getCustomer(id);
  }

  addNote() {
    this.service.addNote(this.customer.id, this.newNote);
    this.newNote = '';
  }
}
