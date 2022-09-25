import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'littil-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm?: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
   this.createContactForm();
  }

  createContactForm(): void {
    this.contactForm = this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      role: [''],
      message: [''],
    });
  }

  postForm(): void {
    if(this.contactForm?.valid) {
      console.log(this.contactForm)
    } else {
      //TODO:: Error handling
    }
  }
}
