///<reference types="cypress"/>
describe('Reqres API', () => {
    let userData;
    it.only('Get list of User',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            expect(res.status).to.eql(200)
            userData=res.body.data
        })
    })
    it.only('get Details of User',()=>{
        cy.request({
            method:"GET",
            url:`https://reqres.in/api/users/${userData[0].id}`
        }).then((res)=>{
            expect(res.status).to.eql(200)
            cy.log(typeof JSON.stringify(res))
        })
    })
    it('Create User',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users/2",
            body:{
                name:"Ankit",
                job:"software Tester"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.statusText).to.eql("Created")
        })
    })
});