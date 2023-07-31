///<reference types='cypress'/>
describe('Dynamic Dropdown / Autosuggestions', () => {
    it('DynamicdropDown', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type('i phone')
        cy.get('.YGcVZO').each((el)=>{
            if(el.text().includes('11 64bg')){
                cy.wrap(el).click()
                return false
            }
        })
    });
});