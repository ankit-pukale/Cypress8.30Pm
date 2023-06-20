// what to test ==> test scenario
// 1>valid 
// 2>invalid
//How to test ==>test case
//FrameWork 
/*
1) Mocha
2)BDD
*/
//js typescript
//command line interface==>CLI ==>npx cypress run
///<reference types='cypress'/>
describe('verify contactus form ',function(){
    it.skip('verify contactus form with valid Details',function(){
        //to visit website use cy.visit()
        cy.visit('https://mediaproper.com/contact-us/')
        //get element
        cy.get('#input_1_1').type('DummyUser')
        cy.get('#input_1_2').type('dummyLastName')
        cy.get('#input_1_3').type('dummyuser@dummy.com')
        cy.get('#input_1_4').type('9876543210')
        cy.get('input[placeholder="Website"]').type('www.dummywebsite.com')
        cy.get('input[placeholder="Company"]').type('dummyCompany')
        cy.get('textarea[placeholder="What can we do for you?"]').type('test123213782173897129837218937')
        cy.get('.gform_button').click()
        //assertion==> validation 
        //implicit assertion ==> should()
        //explicit assertion ==> expect()
        cy.get('h1').should('be.visible')
    });
    it('TC-02 negative testing of email field in ContactUS form ',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        //get element
        cy.get('#input_1_1').type('DummyUser')
        cy.get('#input_1_2').type('dummyLastName')
        cy.get('#input_1_3').type('dummyuserdummy.com')
        cy.get('#input_1_4').type('9876543210')
        cy.get('input[placeholder="Website"]').type('www.dummywebsite.com')
        cy.get('input[placeholder="Company"]').type('dummyCompany')
        cy.get('textarea[placeholder="What can we do for you?"]').type('test123213782173897129837218937')
        cy.get('.gform_button').click()
        cy.contains('The email address entered is invalid').should('be.visible')
    })

});