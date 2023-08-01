///<reference types='cypress'/>
describe('', () => {
    it('', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath("(//*[text()='Become a Seller'])[1]").then((el)=>{
            cy.log(el.text())
        })
        cy.get('[type="text"]').type('i phone 14')
        cy.get('[type="text"]').then((el)=>{
            cy.log(el.text())
    })
    });
});