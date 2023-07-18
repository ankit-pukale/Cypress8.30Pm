///<reference types='cypress'/>
describe('Custom command', () => {
    it.skip(' positive scenario for contactus',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        cy.contactUsfillData('TestUSer','LastName','testLastName@gmail.com','9874563210','www.test.com','testCompany','this is for test Purpose Please ignore')
        cy.get('.gform_button').click()
        cy.get('h1').should('be.visible')
    })
    it('use custom command for dynamic xpath',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.dynamicXpath('Beauty')
    })
});