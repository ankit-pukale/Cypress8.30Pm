describe('Paypal API', () => {
    let APITOKEN=""
    let basicToken="ASc6rfFmjFzWiXBMFSm9Vd-gQ4DbtIvG_Ly07edj1xEa-4_PwriG5ZRZiXl"+":"+"EAm34eE_0ECotq2FdgdE4m3Rbwlyh-1GwWq"
    basicToken =btoa(basicToken)
    let payload={
        grant_type:"client_credentials"
    }
    const params = new URLSearchParams();
  for (const key in payload) {
    params.append(key, payload[key]);
  }
  payload= params.toString();
    it('Generate Authentication Token',()=>{
    cy.request({
        method:"POST",
        url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
        headers:{
            Authorization:"Basic "+basicToken,
            content_type:"x-www-form-urlencoded"
        },
        body:payload
    }).then((res)=>{
        APITOKEN=res.body.access_token
    })
    })

    it('Create Order',()=>{
        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v2/checkout/orders",
            headers:{
                Authorization:"Bearer "+APITOKEN,
                "Content-Type":"application/json"
            },
            body:{
                "intent": "CAPTURE",
                "purchase_units": [
                  {
                    "amount": {
                      "currency_code": "USD",
                      "value": "100.00"
                    }
                  }
                ]
              }
        }).then((res)=>{
            expect(res.body.status).to.eql("CREATED")
        })
    })
});