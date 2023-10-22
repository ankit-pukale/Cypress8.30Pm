///<reference types="cypress"/>
describe('', () => {
    // https://gist.github.com/fityanos/0a345e9e9de498b6c629f78e6b2835f5
    it('', () => {
        cy.visit('http://127.0.0.1:5501/index.html')
        cy.get('#captchaImg').invoke('attr','src').then((attrVal)=>{
            cy.task('queryDb',`SELECT Cvalue FROM testdb.captcha WHERE Ckey='${attrVal.split('\\')[2].replace('.png','')}';`).then((sol)=>{
                cy.get('#capTextBox').type(sol[0]['Cvalue'])
                cy.get('#btnSubmit').click()
                cy.get('h1').should('have.text','Dashboard Page')
            })
        })
    });
});