///<reference types='cypress'/>
describe('Traversal Day3', () => {
    it.skip('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._37M3Pb').children().should('have.class','eFQ30H')
        //chai library
    });
    it.skip('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._331-kn').next().should('have.class','_6t1WkM _3HqJxg')
    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        //hardCoded or fixed wait
        //implicit wait
        cy.wait(5000)
        //Explicit wait cy.intercept()
        cy.get('._331-kn',{timeout:10000}).nextAll().should('have.length',3)
    })
});