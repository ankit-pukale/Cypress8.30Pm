///<reference types='cypress'/>
/*
to install xpath ==> npm install cypress-xpath
paster ==> require('cypress-xpath')   in support e2e.js
*/
describe('X path ', () => {
    it.skip('Gereral xpath',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@class="_2Brcj4"]').should('have.length',4)
    })

    it('select one element from list using x-path',()=>{
        cy.visit('https://www.flipkart.com/')
        //selecting third element using x path (Note ==> for xpath index start from 1)
        cy.xpath('(//div[@class="_2Brcj4"])[3]').should('contain','CONSUMER POLICY')
    })
});