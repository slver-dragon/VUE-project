describe("Todo app e2e test", () => {
  it("New task enter", () => {
    cy.visit("localhost:8080");
    cy.get('[placeholder="Add a new task"]').type('NewTask{Enter}');
  });

  it("Change task status", () => {
    cy.get('div').contains('NewTask').click();
  });

  it("Task sorting", () => {
    cy.get('span').contains('Complete').click();
    cy.get('span').contains('Active').click();
    cy.get('span').contains('All').click();
  });

  it("New task delete", () => {
    cy.get('div').contains('NewTask').siblings('div').click();
  });
});
