///<reference types='cypress'/>
describe('Traversal Day8', () => {
    it.skip('Children()', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3sdu8W').children().not('div').should('have.length',5)
    });
    it.skip('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Grocery"]').parents('.yAlKeh').should('have.class','yAlKeh')
    })
    it.skip('closest local ',()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('.class2').closest('#unOrderedList').should('have.class','text2')
    })
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        // cy.viewport('iphone-3')
        cy.visit('https://www.flipkart.com/')
        cy.get('._2Brcj4').filter('.address').should('have.length',2)
    })
});

//html ,css ==cascaded style sheet,Js