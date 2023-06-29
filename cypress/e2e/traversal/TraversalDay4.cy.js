describe('Traversal Day4', () => {
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get("[aria-label='Mobiles']").nextUntil('[aria-label="Appliances"]').should('have.length', 3);
    });
});