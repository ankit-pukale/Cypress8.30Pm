describe('', () => {
    let token="37a2ccf6a9efb50b9009067ca61da2756ebe4f159897a51f4b835ee10d7598de"
    let id=""
    it('',()=>{
        //JSON.stringify()==> Convert Json into string
        //JSON.parse()=>convert JSON string into JSON
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization": "Bearer "+token
            },
            body:{name:"Tenali Ramakrishna", "gender":"male", "email":`test${Math.ceil(Math.random()*1000)}@gmail.com`, "status":"active"}
        }).then((res)=>{
            id=res.body.id
        })
    })
    it('delete User from list',()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/"+id,
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization": "Bearer "+token
            },
        }).then((res)=>{
            cy.log(res)
        })
    })

});