///<reference types="cypress"/>
describe("Date Picker", () => {
  let date = new Date(); // get Todays Date
  date.setDate(date.getDate() + 90); // get date after 90 days and set in date OBJ
  let dateOfTheDay = date.getDate();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();
  function selectMonthYear(month,year){
    cy.get('.datepicker-days .datepicker-switch').then((el)=>{
        if(el.text().includes(month)&&el.text().includes(year)){
            return false
        }else{
            cy.get('.datepicker-days .next').click()
            selectMonthYear(month,year)
        }
    })
  }
  it("verify -0--- is available after 90 days", () => {
    cy.visit("https://www.webdriveruniversity.com/Datepicker/index.html");
    cy.get(".glyphicon-calendar").click();
    selectMonthYear(month,year)
    cy.contains('[class="day"]',dateOfTheDay).click()
  });
});
