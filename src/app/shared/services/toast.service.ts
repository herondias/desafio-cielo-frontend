import { Injectable, TemplateRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: { body: string, classname: string, delay: number }[] = [];

  constructor() { }

  showSuccessToast(body: string) {
    this.addMessage = { body, classname: 'bg-success text-light', delay: 5000 };
  }

  showInfoToast(body: string) {
    this.addMessage = { body, classname: 'bg-info text-light', delay: 5000 };
  }

  showWarnToast(body: string) {
    this.addMessage = { body, classname: 'bg-warning text-light', delay: 8000 };
  }

  showErrorToast(body: string) {
    this.addMessage = { body, classname: 'bg-warning text-light', delay: 8000 };
  }

  onErrorWithToast(httpError: HttpErrorResponse) {
    let body = '';
    const genericMessage = 'Houve um erro ao tentar realizar essa ação';
    const { error } = httpError;
    if ((error || {}).timestamp) {
      const errorStatus = (error || {}).status || (error || {}).error;
      const errorMsg = (error || {}).message;
      body = errorMsg || genericMessage;
    } else {
      body = `Serviço não encontrado ${httpError.url}`;
    }

    this.showErrorToast(body);
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  private hasSameMessage(toastType): boolean {
    return this.toasts.some(message => message.body === toastType.body);
  }

  private set addMessage(toastType: any) {
    if (!this.hasSameMessage(toastType)) {
      this.toasts.push(toastType);
    }
  }
}
