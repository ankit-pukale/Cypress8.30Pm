///<reference types="cypress"/>
describe('', () => {
    it("checkbox",()=>{
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        // cy.get('[value="option-2"]').check().should('be.checked')
        // cy.get('[value="option-3"]').check().should('be.checked')
        // //using click
        // cy.get('[value="option-1"]').click().should('be.checked')
        // cy.get('[value="option-1"]').click().should('not.be.checked')
        cy.get('[type="checkbox"]').each((chckEl)=>{
            cy.wrap(chckEl).check().should('be.checked')
        })
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
    })
    it("radio",()=>{
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
        //.uncheck can be called on checkbox only
        // cy.get('[value="yellow"]').uncheck()
    })
});