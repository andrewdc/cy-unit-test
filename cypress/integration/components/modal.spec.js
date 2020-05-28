describe("Test the Modal Coponent", () => {
  beforeEach(() => {
    cy.visit("/timeout");
  });
  it("Loads Timeout Page", () => {
   cy.contains("h1", "Arcoro Timeout Component");
  });
  it("can open and close modal", () => {
   cy.contains("button", "show modal").click();
   cy.get(".modal").should("be.visible");
   cy.log("modal can be closed with Close Button");
   cy.get(".close_icon").click();
   cy.get(".modal").should("not.be.visible");
  });
  it("Escape closes modal", () => {
    cy.contains("button", "show modal").click();
    cy.get('body').type('{esc}');
    cy.get(".modal").should("not.be.visible");
   }); 
   it("Click Outside closes modal", () => {
    cy.contains("button", "show modal").click();
    cy.get('body').click('topRight');
    cy.get(".modal").should("not.be.visible");
   });
});

//"iphone-6", "iphone-x", "samsung-s10", [(1024, 720)],
const smlsizes = ["iphone-6", "iphone-x", "samsung-s10", [406, 777]];

describe("Test the Modal Coponent for small Responsive changes", () => {  
  beforeEach(() => {
    cy.visit("/timeout");
  });

  smlsizes.forEach((size) => {

    it(`should display correctly on ${size}`, () => {
      if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
      } else {
          cy.viewport(size);
      }
      
       let winWidth;

       cy.window()
         .then((win) => {
           winWidth = win.innerWidth;
         })
         .then(() => {
          cy.contains("button", "show small").click();
          cy.get(".modal").should("have.css", "width", `${winWidth}px`);
         });
    })
  })
})


/* 
close button closes modal - DONE
esc closes modal - DONE
click outside closes modal  - DONE
=========================== ???
  PROP closeButtonText = 'Close';
  PROP allowEscape = true;
  PROP allowOutsideClick = true;
  PROP requireResponse = false;
      allowEscape fasle, and allowOutside false
  PROP z-index should = what is set
*/
