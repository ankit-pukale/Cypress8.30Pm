///<reference types='cypress'/>

describe('', () => {
    it('looping on elements',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('i phone{enter}')
        cy.get('h2 a').each((el)=>{
            if(el.text().includes('5s')){
                cy.wrap(el).click()
                return false
            }
        })
    })
});