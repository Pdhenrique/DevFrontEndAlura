export class Negotiation {
    constructor(_date, amount, value //FUNCIONAMENTO SEGUE IGUAL, POREM O TORNANDO PUBLICO E READONLY
    ) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    // get amount(): number {
    //   return this._amount;
    // }
    //GETTER REMOVIDO POIS VALUE JÁ É UM VALOR PUBLICO E READONLY
    // get value(): number {
    //   return this.value;
    // }
    get volume() {
        return this.amount * this.value;
    }
}
