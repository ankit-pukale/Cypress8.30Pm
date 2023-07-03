///<reference types="cypress"/>
describe('Traversal MEthods', () => {
    it.skip('Children()',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3sdu8W ').children().should('have.length',10)
    })
    it.skip('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Electronics"]').prev().should('contain','Fashion')
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Travel"]',{timeout:10000}).should('be.visible').prevAll().should('have.length',6)
    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Travel"]',{timeout:10000}).should('be.visible').prevUntil('[aria-label="Mobiles"]').should('have.length',4)
    })
});