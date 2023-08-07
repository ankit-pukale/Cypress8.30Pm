///<reference types='cypress'/>
describe('', () => {
    after(() => {
        cy.log(Cypress.currentTest.title)
    });
    it('', () => {
        cy.visit('https://www.flipkart.com/')
        //10==>
        cy.xpath("(//*[text()='Become a Seller'])[1]").then((el)=>{
            cy.log(el.text())
        })
        cy.get('[type="text"]').type('i phone 14')
        cy.get('[type="text"]').then((el)=>{
            cy.log(el.text())
    })
    });
});