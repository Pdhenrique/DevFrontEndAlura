import { NegotiationController } from "./controllers/negotiation-controller";

const controller = new NegotiationController();

const form = document.querySelector(".form");
form.addEventListener("submit", event => {
  event.preventDefault();
  controller.add();
});
