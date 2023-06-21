///<reference types='cypress'/>
describe('Traversal Methods',()=>{
    it.skip('TC01- To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').first().should('have.text','SAMSUNG')
    })

    it.skip('TC02-To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').last().should('have.text','10% or more')
    })

    it('TC03- To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').eq(4).should('have.text','Infinix')
    })
})