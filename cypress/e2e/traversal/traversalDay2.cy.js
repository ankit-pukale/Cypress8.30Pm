///<reference types='cypress'/>
describe('TS01-Traversal day 2', () => {
    it('Children()To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._2d0we9').first().children().should('have.length',7)
    });

    it.only('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('[class="_4921Z t0pPfW"]').first().next().should('have.text','APPLE')
    });
});