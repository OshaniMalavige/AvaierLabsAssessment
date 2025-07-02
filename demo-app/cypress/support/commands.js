Cypress.Commands.add('selectBorrower', (borrowerId) => {
    // Simulate selecting a borrower via UI
    cy.get(`[data-testid="borrower-item-${borrowerId}"]`).click();
});
