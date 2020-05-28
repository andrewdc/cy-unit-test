describe("Notifications Tests", () => {
  beforeEach(() => {
    cy.visit("/componentdocs/notifications");
  });
  it("navigates to /componentdocs/notifications", () => {
    cy.url().should("include", "/notifications");
    // Assert
  });

  it("Testing Show/Hide Panel actions", () => {
    cy.log("clicking notification-trigger should open tray");
    cy.get(".notification-trigger").click();
    cy.log(".tray should be open");
    cy.get(".tray").should("be.visible");

    cy.get(".notification-trigger").click();
    cy.log(".tray should be closed");
    cy.get(".tray").should("not.be.visible");

    cy.get(".notification-trigger").click();
    cy.log("clicking off tray should close it");
    cy.get("body").click();
    cy.get(".tray").should("not.be.visible");
  });

  it("tests the tray close button", () => {
    cy.get(".notification-trigger").click();
    cy.get("[data-cy='close-tray']").click();
    cy.get(".tray").should("not.be.visible");
  });

  it("Closes tray when no message", () => {
    cy.get(".notification-trigger").click();
    cy.get(".dismiss-all").click();
    cy.get(".tray").should("not.be.visible");
  });

  it("clears the new messages indicator when IO has seen messages", () => {
    cy.get(".notification-trigger").click();
    cy.log("scroll content to bottom");
    cy.get(".content")
      .scrollTo("bottom", { duration: 100 })
      .scrollTo("top");

    cy.get("#arcoro-notifications .indicator").should("not.be.visible");
  });

  it("deletes a message", () => {
    cy.get(".notification-trigger").click();
    cy.get('[data-cy="note-delete"]')
      .first()
      .click()
      .should("not.be.visible");
  });
  it("verifies sorting toggle", () => {
    cy.get(".notification-trigger").click();
    cy.get(".tray")
      .find(".type")
      .click();
    cy.log("Ordered by type");
    cy.get(".notification")
      .first()
      .find(".message")
      .should("have.class", "success");
    cy.log("Ordered by recent");
    cy.get(".tray")
      .find(".type")
      .click();
    cy.get(".notification")
      .eq(4)
      .find(".date")
      .should("to.have.text", "2/21, 6:04 PM");
  });
});
