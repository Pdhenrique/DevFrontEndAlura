export class Negotiation {
  constructor(
    private _date: Date,
    public readonly amount: number,
    public readonly value: number //FUNCIONAMENTO SEGUE IGUAL, POREM O TORNANDO PUBLICO E READONLY
  ) {}

  get date(): Date {
    const data = new Date(this._date.getTime());
    return data;
  }

  // get amount(): number {
  //   return this._amount;
  // }

  //GETTER REMOVIDO POIS VALUE JÁ É UM VALOR PUBLICO E READONLY

  // get value(): number {
  //   return this.value;
  // }

  get volume(): number {
    return this.amount * this.value;
  }
}
