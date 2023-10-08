//https://www.npmjs.com/package/cypress-file-upload
///<reference types="cypress"/>
describe('', () => {
    it('File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('dummy.pdf')
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')
    });
});