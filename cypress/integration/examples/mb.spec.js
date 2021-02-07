/// <reference types="cypress" />

context('Viewport', () => {
    beforeEach(() => {
        cy.visit('https://berglind.org')
    })

    it('Lets find out', () => {
        cy.get('.header-image').should('be.visible')
    })

    it('Lets find out', () => {
        cy.get('.elementor-element-v5hdxhb > .elementor-widget-container > .elementor-heading-title').should('contain', 'Magnus')
    })

    it('Header', () => {
        cy.get('#menu-item-29 > a').click()
        cy.get('.elementor-element-d9oe17i > .elementor-widget-container > .elementor-heading-title').should('contain', 'Magnus')
    })




})