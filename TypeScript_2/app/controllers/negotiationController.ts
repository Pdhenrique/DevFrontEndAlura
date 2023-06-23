import { DayOfWeek } from "../enums/dayOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationView } from "../views/negotiationView.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationView = new NegotiationView("#negotiationView", true);
  private messageView = new MessageView("#messageView");



  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#value");
    this.negotiationView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = Negotiation.criaDe(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    )
    if (!this.itsBusinessDay(negotiation.date)) {
      this.messageView.update("apenas negociaçõe em dias úteis são aceitas");
      return
    }
    this.negotiations.add(negotiation);
    this.clearForm();
    this.updateView();
  }
  private itsBusinessDay(date: Date) {
    return date.getDay() > DayOfWeek.SUNDAY 
        && date.getDay() < DayOfWeek.SATURDAY;
  }



  private clearForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";

    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationView.update(this.negotiations);
    this.messageView.update("Adicionada com sucesso");
  }
}
