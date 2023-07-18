beforeEach(() => {
    cy.login();
});

//The login command is called to run before each test case. 
//This is a better practice then copying the login test case into the booking test.
//For readability the booking tests should only contain commands and lines relvant to the test case.  


describe('E2E bookings', () => {
    it('Successsful booking', () => {

        cy.addOneItemToBasket();
        cy.checkoutPageOne();
        cy.checkoutPageTwo();
        cy.checkoutComplete();
       
    })
  
  })

//As the test was been written, it made sense to create commands that were specfic to each page.
//Not only did this improve readability, these commands can be reused on further tests.
//For exmaple say test cases around checking diffrent card types needed to be implemented for bookings, the first 3 commands would be reused for a majority of those test cases.    
  