///<reference types="cypress"/>
describe('', () => {
    it.skip('shadow Dom',()=>{
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('[apptitle="BOOKS"]').shadow().find('#input').type('book')
    })
    it.skip('shadow dom ',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/e2e/shadowDom/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').shadow().find('#name').type('Resolved shadow Dom')
    })

    it('shadow dom ',()=>{
        //add includeShadowDom:true,
        cy.visit('http://127.0.0.1:5500/cypress/e2e/shadowDom/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').find('#name').type('Resolved shadow Dom')
    })


});