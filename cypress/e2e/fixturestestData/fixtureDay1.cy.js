///<reference types='cypress'/>
describe('verify contactus form ',function(){
    let testData={
        firstName:"DummyUser",
        lastName:"dummyLastName",
        email:"dummyuser@dummy.com",
        mobile:"9876543210",
        webSite:"www.dummywebsite.com",
        companyName:"dummyCompany",
        message:"test123213782173897129837218937"
    }
    it.skip('verify contactus form with valid Details',function(){
        //to visit website use cy.visit()
        cy.visit('https://mediaproper.com/contact-us/')
        //get element
        cy.get('#input_1_1').type(testData.firstName)
        cy.get('#input_1_2').type(testData.lastName)
        cy.get('#input_1_3').type(testData.email)
        cy.get('#input_1_4').type(testData.mobile)
        cy.get('input[placeholder="Website"]').type(testData.webSite)
        cy.get('input[placeholder="Company"]').type(testData.companyName)
        cy.get('textarea[placeholder="What can we do for you?"]').type(testData['message'])
        cy.get('.gform_button').click()
        //assertion==> validation 
        //implicit assertion ==> should()
        //explicit assertion ==> expect()
        cy.get('h1').should('be.visible')
    });

    it.skip('reading data from fixtures for single it block',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        //get element
        cy.fixture('testData').then((data)=>{
            cy.get('#input_1_1').type(data.firstName)
            cy.get('#input_1_2').type(data.lastName)
            cy.get('#input_1_3').type(data.email)
            cy.get('#input_1_4').type(data.mobile)
            cy.get('input[placeholder="Website"]').type(data.webSite)
            cy.get('input[placeholder="Company"]').type(data.companyName)
            cy.get('textarea[placeholder="What can we do for you?"]').type(data['message'])
        })

        cy.get('.gform_button').click()
        //assertion==> validation 
        //implicit assertion ==> should()
        //explicit assertion ==> expect()
        cy.get('h1').should('be.visible')
    })

    it.skip('customcommand +fixtures',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        cy.fixture('testData/testData').then((data)=>{
            cy.contactUsfillData(data.firstName,data.lastName,data.email,data.mobile,data.webSite,data.companyName,data.message)
        })
        cy.get('.gform_button').click()
        cy.get('h1').should('be.visible')
    })

    it('customcommand +fixtures from array of object',()=>{
        cy.fixture('testData/arrObj').then((data)=>{
        data.forEach((el)=>{
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsfillData(el.firstName,el.lastName,el.email,el.mobile,el.webSite,el.companyName,el.message)            
            cy.get('.gform_button').click()
            cy.get('h1').should('be.visible')
        })
        })
    })


});