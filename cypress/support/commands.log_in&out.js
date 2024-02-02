Cypress.Commands.add('login', (username = 'USERNAME', password = 'PASSWORD') => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(Cypress.env(username));
    cy.get('[data-test="password"]').type(Cypress.env(password));
    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_logo').should('contain', 'Swag Labs')


});