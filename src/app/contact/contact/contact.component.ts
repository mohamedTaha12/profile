import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData!: FormGroup
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }
  sendMessage() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your message has been received successfully. Thank you ' + this.formData.value['name'] });
  }
}
