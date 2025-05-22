import { Injectable } from '@angular/core';
import { Customer } from './models';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'Jan Kowalski', email: 'jan@example.com', notes: ['Dzwonić w pon.'] },
    { id: 2, name: 'Anna Nowak', email: 'anna@example.com', notes: [] },
  ];

  getCustomers() {
    return this.customers;
  }

  getCustomer(id: number) {
    return this.customers.find(c => c.id === id);
  }

  addNote(customerId: number, note: string) {
    const customer = this.getCustomer(customerId);
    if (customer) {
      customer.notes.push(note);
    }
  }
}
