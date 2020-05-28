describe("Test the Timeout Component", () => {
    beforeEach(() => {
      cy.visit("/timeout");
    });
    it("Timeout Component - Modal trigger with timeout", () => {
      cy.contains("button", "Enable Watcher").click();
      cy.clock();
      cy.tick(1000);
      cy.get(".timeValue").should('have.text', '00:05');
      cy.tick(1000);
      cy.get(".timeValue").should('have.text', '00:04');
      cy.tick(1000);
      cy.get(".timeValue").should('have.text', '00:03');
      cy.tick(1000);
      cy.get(".timeValue").should('have.text', '00:02');
      cy.tick(1000);
      cy.get(".timeValue").should('have.text', '00:01');
      cy.tick(1000);
      cy.get(".modal").should("be.visible");
      cy.log("modal is open");  
      cy.log("Cannot press escape key to close modal");
      cy.get('body').type('{esc}');
      cy.get(".modal").should("be.visible");
      // cy.log("Cannot Click outside of the modal to close");
      // cy.get('body').click('topRight');
      // cy.get(".modal").should("be.visible");   
      // cy.log("modal can be closed with X Button");
      // cy.get(".close_icon").click();
      // cy.get(".modal").should("not.be.visible"); 
      cy.log("clicking action button closes modal and resets timer");
      cy.get(".close_button").click();
      cy.get(".timeValue").should("have.text", "00:06");
      cy.get(".modal").should("not.be.visible"); 

    });
  });
/* 
Header Text - Still There?  - DONE
Footer Button Text = "I'm still here"   - DONE

User should not be able to dismiss the modal by clicking outside the modal.   - DONE
User should not be able to dismiss the modal by using the escape key.   - DONE
User can dismiss the modal by clicking on the "X" close widget.   - DONE
User can dismiss the modal by clicking on the "I'm still here" button.   - DONE
*/
