///<reference types="cypress"/>
describe('Traversal Day 6', () => {
    it.skip('To get parents DOM element of elements, use the .parents() command.', () => {
        cy.visit('https://www.flipkart.com/')
        cy.wait(2000)
        cy.get('[aria-label="Grocery"]').parents().should('have.length',22)
    });
    it.skip('',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').parents().should('have.length',5)
    })
    it.skip('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Grocery"]').parentsUntil('._2L0uxW').should('have.length',7)
    })
    it.skip('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3sdu8W emupdz"]').should('be.visible').find('a').should('have.length',5)
    })
    it.skip('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3sdu8W emupdz"]').children().not('[aria-label="Grocery"]').should('have.length',9)
    })
    it.skip('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.wait(4000)
        cy.get('[class="_3sdu8W emupdz"]').children().not('div').should('have.length',5)
    })
});