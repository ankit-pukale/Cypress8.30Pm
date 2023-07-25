///<reference types="cypress"/>
import data from '../../fixtures/testData/arrObj.json'
describe('Fixture Import Method', () => {
    data.forEach((el,index)=>{
        it(`TC ${index} read file using Import`,()=>{
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsfillData(el.firstName,el.lastName,el.email,el.mobile,el.webSite,el.companyName,el.message)            
            cy.get('.gform_button').click()
            cy.get('h1').should('be.visible')
        })
    })

});