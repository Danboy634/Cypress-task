
//Commands that are reused on test cases 
 
 Cypress.Commands.add('login', () => { 
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').click().type("standard_user");
    cy.get('[data-test="password"]').click().type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include","/inventory");
    cy.get('.title').should('be.visible');
})

//The login command was created as it will be reused across multiple tests. 
//It validtaes if the login is succesful by checking if the next page loads and if a element related to the inventory page is vsible. 


Cypress.Commands.add('addOneItemToBasket',() =>{

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should("include","/cart");
    cy.get('.inventory_item_price').should('contain','$29.99');
    cy.get('[data-test="checkout"]').click();

})

//Command for adding one item to the basket, this can be reused on multiple diffrent test cases to progress through the first stage of the flow.
//Within this command is a example of bad practice for selectors. You may swap out the element, you may refactor CSS and update ID's, or you may add or remove classes that affect the style of the element.    

Cypress.Commands.add('checkoutPageOne',() =>{
    cy.url().should("include","/checkout-step-one");
    cy.get('[data-test="firstName"]').click().type('Daniel');
    cy.get('[data-test="lastName"]').click().type('Lealman');
    cy.get('[data-test="postalCode"]').click().type('L15 8JS');
    cy.get('[data-test="continue"]').click();

})

//The first checkout page required the user to input there name and postcode. This will be a repatable task on fiurther test cases hence why a command was created.  

Cypress.Commands.add('checkoutPageTwo',() =>{
    cy.url().should("include","/checkout-step-two");
    cy.get('.summary_info > :nth-child(2)').should('contain','SauceCard #31337');
    cy.get('.summary_info > :nth-child(4)').should('contain','Free Pony Express Delivery!');
    cy.get('.summary_subtotal_label').should('contain','Item total: $29.99');
    cy.get('.summary_tax_label').should('contain','Tax: $2.40');
    cy.get('.summary_total_label').should('contain','Total: $32.39');
    cy.get('[data-test="finish"]').click();
 })

//The second checkout page valiadtes taht the prices are been calculated corretly. If the price data changes when it is not suposed too, the assertions will flag if the price is diffrent.  

Cypress.Commands.add('checkoutComplete',() =>{
    cy.url().should("include","/checkout-complete");
    cy.get('.complete-header').should('contain','Thank you for your order!');
    cy.get('.complete-text').should('contain','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should("include","/inventory");

})

// The checkout complete validates the user is on the completion page and also if the user can return back to the homepage, which in this case is the inventory page. 