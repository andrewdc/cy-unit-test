import Superlink from "./Superlink.svelte";
import { mount } from "cypress-svelte-unit-test";
it("shows", () => {
  mount(Superlink);
  cy.contains("");
});
