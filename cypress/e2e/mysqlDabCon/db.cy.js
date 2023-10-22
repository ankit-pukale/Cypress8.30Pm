///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        cy.task("queryDb",`SELECT email FROM testdb.testdb WHERE empname='ankit'`).then((op)=>{
            cy.log(op)
        });
    });
});