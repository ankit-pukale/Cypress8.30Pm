///<reference types='cypress'/>
describe('Dynamic Dropdown / Autosuggestions', () => {
    it('DynamicdropDown', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type('i phone 14')
        cy.get('.Y5N33s').each((el)=>{
            if(el.text().includes('128bg')){
                cy.wrap(el).click()
                return false
            }
        })
    });
});