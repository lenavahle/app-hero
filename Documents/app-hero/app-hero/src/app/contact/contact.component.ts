import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: FormGroup; 

  @Input() name = new FormControl('', [Validators.required]);
  @Input() email = new FormControl('', [Validators.required, Validators.email]);
  @Input() telephone = new FormControl('');
  @Input() subject = new FormControl('');
  @Input() message = new FormControl('', [Validators.required]);

  constructor(private readonly fb: FormBuilder) {
    this.contact = new FormGroup({});
    this.contact.addControl('name', this.name);
    this.contact.addControl('email', this.email);
    this.contact.addControl('telephone', this.telephone);
    this.contact.addControl('subject', this.subject);
    this.contact.addControl('message', this.message);
   }

  ngOnInit() {
  }

  public submit () {
    console.log(this.name.valid);
  }
}
