import { DayOfWeek } from "../enums/dayOfWeek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationView } from "../views/negotiationView.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationView = new NegotiationView("#negotiationView");
        this.messageView = new MessageView("#messageView");
        this.inputDate = document.querySelector("#date");
        this.inputAmount = document.querySelector("#amount");
        this.inputValue = document.querySelector("#value");
        this.negotiationView.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        if (!this.itsBusinessDay(negotiation.date)) {
            this.messageView.update("apenas negociaçõe em dias úteis são aceitas");
            return;
        }
        this.negotiations.add(negotiation);
        this.clearForm();
        this.updateView();
    }
    itsBusinessDay(date) {
        return date.getDay() > DayOfWeek.SUNDAY
            && date.getDay() < DayOfWeek.SATURDAY;
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputAmount.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationView.update(this.negotiations);
        this.messageView.update("Adicionada com sucesso");
    }
}
