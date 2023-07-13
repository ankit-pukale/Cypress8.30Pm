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

    ////*[@aria-label="Home & Furniture"]  use star to select attr and value with any tagName
    it('Traverse towards parent element',()=>{
        //to traverse towards parent el /..
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//*[@aria-label="Home & Furniture"]/..').should('have.class','_3sdu8W')
    })

    it('traverse towards children el',()=>{
        cy.visit('https://www.flipkart.com/')
        //To traverse towards children use //tagname
        cy.xpath('(//*[@aria-label="Home & Furniture"]//div//div)[1]').should('have.class','YBLJE4')
        cy.xpath('//*[@aria-label="Home & Furniture"]//span[@class="_1XjE3T"]').should('have.class','_1XjE3T')
    })

    it('dynamic Xpath',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@aria-label="$var"]'.replace('$var','Appliances'))
    })
});