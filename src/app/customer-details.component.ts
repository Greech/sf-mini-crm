import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-details',
  template: `
    <mat-card *ngIf="customer" style="margin: 24px; padding: 16px;">
      <h2>{{ customer.name }}</h2>
      <p>{{ customer.email }}</p>

      <h3>Notatki</h3>
      <mat-list>
        <mat-list-item *ngFor="let note of customer.notes">{{ note }}</mat-list-item>
      </mat-list>

      <div style="margin-top: 16px; display: flex; gap: 8px; align-items: center;">
        <mat-form-field appearance="outline" style="flex: 1;">
          <mat-label>Dodaj notatkę</mat-label>
          <input matInput [(ngModel)]="newNote" />
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="addNote()">Dodaj</button>
      </div>
    </mat-card>
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
