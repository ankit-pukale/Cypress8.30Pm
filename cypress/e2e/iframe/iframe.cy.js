///<reference types="cypress"/>
describe('Handle I frame in Cypress', () => {
    it.skip('I frame using Jquery', () => {
        cy.visit('https://jqueryui.com/checkboxradio/')
        // cy.get('#radio-1').check().should('be.checked') it is inside Iframe so can not check directly
        cy.get('.demo-frame').then(($frame)=>{
            let body=$frame.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('#radio-1').check({force: true} ).should('be.checked')        })
    });
    it.skip('Iframe using Javascript',()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('.demo-frame').then((frame)=>{
            let body=frame[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('#radio-1').check({force: true} ).should('be.checked')
        })
    })

    it('Iframe using Javascript',()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.resolveIframe('.demo-frame').find('#radio-1').check({force: true} ).should('be.checked')
    })
});