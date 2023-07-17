///<reference types='cypress'/>
describe('x-path', () => {
    it('select element by text()',()=>{
        cy.visit('https://www.flipkart.com/')
        //select by using text
        cy.xpath('//*[@class="YBLJE4"]//span[text()=\'Electronics\']').should('have.text','Electronics')
        //substring by substring
        cy.xpath('//*[contains(text(),\'Deals on Electronics\')]').should('contain','Deals on Electronics')
    })
});