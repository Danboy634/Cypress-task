

describe('login page', () => {
  it('Login success', () => {
    cy.login();
  })
// The overall test case is the login page, indvidual tests ran against this should only be testing areas surronding the login page.
//For example if the login is successful or invalid login attempts
//For the login success test, the login command is called in here. 



  it('Login fail-invalid user', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').click().type("stan");
    cy.get('[data-test="password"]').click().type("fail");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service');
  })

  //For the test case covering invalid login, I verified that if the username and password is inncorrect, the correct error response is returned.
  //I was aiming to cover the case if the username was valid but the password was incorrect, however the response for this still states the username is invalid.



  it('Login fail- locked out user', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').click().type("locked_out_user");
    cy.get('[data-test="password"]').click().type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.');
  })

})

//Although the previous test case did cover error validation, the site did dispaly diffrent error responses depening on the user. Therfore i covered the error response for a lcoked out user.
//This validated that diffrent error responses are returned depnding on teh data that is passed through 
//For the login fail tests, commands are not created for these as they are unquie cases and will ot to be repeated on further tests. 

//A majority of the components on the site were written to allow the best practice for selectors making them clear for anyone reading the code what specfic component is been used.     

