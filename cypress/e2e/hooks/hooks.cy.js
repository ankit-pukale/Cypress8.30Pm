///<reference types='cypress'/>
describe('Hooks ', () => {
    before('I execute once before execution of all test case',()=>{
        cy.log('I am from Before block');
    })
    beforeEach('I execute before each test case',()=>{
        cy.log('i am from beforeEach block');
    })
    after('I execute only once after execution of all testcase',()=>{
        cy.log('i am from After block');
    })
    afterEach('I execute after each and every testcase',()=>{
        cy.log(' i am from afterEach block');
    })

    it('It block Number 1', () => {
        cy.log('it block number '+1)
        cy.screenshot()
    });
    it('It block Number 2', () => {
        cy.log('it block number '+2)
    });
    it('It block Number 3', () => {
        cy.log('it block number '+3)
    });
    it('It block Number 4', () => {
       cy.log('it block number '+4) 
    });
});