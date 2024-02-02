Cypress.Commands.add('ValidBtnCarrinho', () => {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="continue-shopping"]').should('exist')
    cy.get('[data-test="checkout"]').should('exist')
    cy.get('[data-test="continue-shopping"]').click()
});

Cypress.Commands.add('ValidInserirCarrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('.inventory_item_desc').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
    cy.get('[data-test="continue-shopping"]').click()
});

Cypress.Commands.add('ValidRemoveCarrinho', () => {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('#cart_contents_container').should('contain', 'Description', 'QTY')
    cy.screenshot('imgRemoveCarrinho')
    cy.get('[data-test="continue-shopping"]').click()
});