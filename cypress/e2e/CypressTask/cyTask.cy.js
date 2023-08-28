///<reference types='cypress'/>
describe('Create Task', () => {
    it('create task to log on console',()=>{
        cy.task('log','This is my message *************')
    })
    it('Create task to add numbers',()=>{
        cy.task('add',{a:1,b:3}).then((res)=>{
            console.log(res)
        })
    })
    it('Create task to Sub numbers',()=>{
        cy.task('subS',{a:3,b:1}).then((res)=>{
            console.clear()
            console.log(res)
        })
    })
});