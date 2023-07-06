///<reference types="cypress"/>
describe('Traversal', () => {
    it.skip('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Mobiles"]').siblings().should('have.length',9)
    })
    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        // let flag=true
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Mobiles"]',{timeout:20000}).parent().should('have.class','_3sdu8W')

        // assert.isTrue(flag,'Flag is true assertion passed')
    })
});