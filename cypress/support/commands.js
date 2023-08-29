// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('contactUsfillData',(firstName,Lastname,email,mobileNum,webSite,companyName,msg)=>{
    cy.get('#input_1_1').type(firstName)
    cy.get('#input_1_2').type(Lastname)
    cy.get('#input_1_3').type(email)
    cy.get('#input_1_4').type(mobileNum)
    cy.get('input[placeholder="Website"]').type(webSite)
    cy.get('input[placeholder="Company"]').type(companyName)
    cy.get('textarea[placeholder="What can we do for you?"]').type(msg)
})

//This is for Dynamic Xpath
Cypress.Commands.add('dynamicXpath',(text)=>{
    cy.xpath("//span[text()='$var']".replace('$var',text)).click()
})

Cypress.Commands.add('resolveIframe',(IframeEl)=>{
    return cy.get(IframeEl).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)
})