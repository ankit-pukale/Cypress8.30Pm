///<reference types="cypress"/>
describe('fixture Day2 ', () => {
    let testData;
    before(()=>{
        cy.fixture('testData/arrObj').then((data)=>{
            testData=data
        });
    })

    it('Tc01 ',()=>{
        testData.forEach((el)=>{
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsfillData(el.firstName,el.lastName,el.email,el.mobile,el.webSite,el.companyName,el.message)            
            cy.get('.gform_button').click()
            cy.get('h1').should('be.visible')
        })
    })

    it('TC02',()=>{
        testData.forEach((el)=>{
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsfillData(el.firstName,el.lastName,el.email,el.mobile,el.webSite,el.companyName,el.message)            
            cy.get('.gform_button').click()
            cy.get('h1').should('be.visible')
        })
    })

    });
 
    