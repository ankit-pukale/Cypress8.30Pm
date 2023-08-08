///<reference types="cypress"/>
import data from '../readFile/testData.json'
describe('readWrite File', () => {
    it('read File',()=>{
        let arr="dhasjkdhkajshdjk  dhasd kjsahkdjhaskjd haskj dkghas dhkjashdjkashdjksah \n"
        let arr2="gdhsajkgdjkasgdjashdjasgdsagkj"
        cy.readFile('cypress/e2e/readFile/testData.json').then((data)=>{
            cy.log(data)
        })
        cy.writeFile('cypress/e2e/readFile/testData.txt',arr)
        cy.writeFile('cypress/e2e/readFile/testData.txt',arr2,{flag:'a+'})
        cy.log(`this is from import ${JSON.stringify(data)}`)
    })
});