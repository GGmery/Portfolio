import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactForm;
  sending = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

onSubmit() {
  if (this.contactForm.invalid) return;

  this.sending = true;

  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(this.contactForm.value),
  })
    .then(res => {
      this.sending = false;
      if (res.ok) {
        alert('Mensaje enviado con éxito');
        this.contactForm.reset();
      } else {
        alert('Error al enviar el mensaje');
      }
    })
    .catch(() => {
      this.sending = false;
      alert('Error de conexión con el servidor');
    });
}

}
