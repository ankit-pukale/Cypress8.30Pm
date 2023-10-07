///<reference types="cypress"/>
describe('', () => {
    it.skip('',()=>{
        cy.intercept({
            method:"POST",
            url:"https://tempmailo.com/"
        }).as('getMails')
        cy.visit('https://tempmailo.com/')
        cy.wait('@getMails').then((res)=>{
            cy.log(res)
        })
    })
    it('intercepting OrangeHrm',()=>{
        cy.intercept({
            method:"GET",
            url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"},{
                "data": [
        {
            "id": 1,
            "group": "Leave Requests To Approve",
            "pendingActionCount": 10
        },
        {
            "id": 2,
            "group": "Timesheets To Approve",
            "pendingActionCount": 20
        },
        {
            "id": 4,
            "group": "Pending Self Reviews",
            "pendingActionCount": 30
        },
        {
            "id": 5,
            "group": "Candidates To Interview",
            "pendingActionCount": 40
        }
    ],
    "meta": [],
    "rels": []}
        ).as('getActionList')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.wait('@getActionList').then(({response})=>{
            // cy.log(response.body.data[0].group)
            // cy.log(response.body.data[0].pendingActionCount)
            // cy.get(`[class="orangehrm-todo-list-item"]`).each((el,index)=>{
            //     expect(el.text()).to.includes(response.body.data[index].pendingActionCount)
            // })
        })
    })
});

it.skip('intercepting OrangeHrm',()=>{
    cy.intercept("**/action-summary").as('getActionList')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.wait('@getActionList').then(({response})=>{
        cy.log(response.body.data[0].group)
        cy.log(response.body.data[0].pendingActionCount)
        cy.get(`[class="orangehrm-todo-list-item"]`).each((el,index)=>{
            expect(el.text()).to.includes(response.body.data[index].pendingActionCount)
        })
    })
})
