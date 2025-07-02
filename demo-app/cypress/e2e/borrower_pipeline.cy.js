describe('Borrower Detail Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/testingPage');
    });

    it('should toggle AI Explainability accordion', () => {
        cy.get('[data-testid="ai-explainability-button"]').click();
        cy.get('[data-testid="ai-explainability-content"]').should('be.visible');
        cy.get('[data-testid="ai-explainability-button"]').click();
        cy.get('[data-testid="ai-explainability-content"]').should('not.exist');
    });

    it('should display AI flags when accordion is open', () => {
        cy.get('[data-testid="ai-explainability-button"]').click();

        cy.get('[data-testid="ai-flag-item"]')
            .should('have.length.greaterThan', 0)
            .first()
            .should('contain', 'Income Inconsistent with Bank statements');
    });
});
