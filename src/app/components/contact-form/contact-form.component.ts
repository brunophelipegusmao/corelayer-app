import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import emailjs from '@emailjs/browser';

import { EMAILJS_CONFIG } from '../../config/emailjs-config';
import { ButtonComponent } from '../button/button.component';
import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from '../card/card.component';

type MessageType = 'success' | 'error' | '';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  @Input() animation = '';

  @ViewChild('contactFormRef') private readonly contactFormRef?: ElementRef<HTMLFormElement>;

  isSubmitting = false;
  message = '';
  messageType: MessageType = '';

  onSubmit(event: Event): void {
    event.preventDefault();

    this.isSubmitting = true;
    this.message = '';
    this.messageType = '';

    const form = this.contactFormRef?.nativeElement ?? (event.currentTarget as HTMLFormElement | null);

    if (!form) {
      this.message = 'Erro: Formulário não encontrado';
      this.messageType = 'error';
      this.isSubmitting = false;
      return;
    }

    void this.sendForm(form);
  }

  private async sendForm(form: HTMLFormElement): Promise<void> {
    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status !== 200) {
        throw new Error('Falha no envio EmailJS');
      }

      this.message = '✅ Mensagem enviada automaticamente! Retornarei em breve.';
      this.messageType = 'success';
      form.reset();
      this.clearMessageLater();
    } catch (error) {
      console.error('Erro EmailJS:', error);

      const formData = new FormData(form);
      const name = (formData.get('user_name') as string | null) ?? '';
      const email = (formData.get('user_email') as string | null) ?? '';
      const subject = (formData.get('subject') as string | null) ?? '';
      const messageText = (formData.get('message') as string | null) ?? '';

      const mailtoLink = `mailto:bruno.mulim.prog@gmail.com?subject=${encodeURIComponent(`[PORTFÓLIO] ${subject}`)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${messageText}\n\n---\nEnviado via formulário do portfólio`)}`;

      window.location.href = mailtoLink;

      this.message = '⚠️ Usando método alternativo. Complete o envio no seu aplicativo de email.';
      this.messageType = 'success';
      form.reset();
      this.clearMessageLater();
    } finally {
      this.isSubmitting = false;
    }
  }

  private clearMessageLater(): void {
    setTimeout(() => {
      this.message = '';
      this.messageType = '';
    }, 5000);
  }
}
