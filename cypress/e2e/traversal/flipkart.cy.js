///<reference types='cypress'/>
describe('flipkart',()=>{
    it('flipkart test example',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.contains('APPLE iPhone 14 (Midnight, 128 GB)').should('contain','APPLE iPhone 14 (Midni')
    })
})