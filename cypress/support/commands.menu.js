Cypress.Commands.add('ValidMenuSidebar', () => {
    cy.get('#react-burger-menu-btn').should('exist')
    cy.get('#inventory_sidebar_link').should('exist')
    cy.get('#reset_sidebar_link').should('exist')
    
});

Cypress.Commands.add('ValidFooter', () => {
    cy.get('.footer').should('exist')
});