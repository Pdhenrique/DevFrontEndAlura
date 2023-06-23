import { Negotiations } from "../models/negotiations.js";

export abstract class View<T> {
  protected element: HTMLElement;
  private scape = false;

  constructor(selector: string, scape?: boolean) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      this.element = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM`);
    }
    if (scape) {
      this.scape = scape;
    }
  }
  public update(model: T): void {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<script>/, "");
    }
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
