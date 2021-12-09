/// <reference types="cypress" />

describe('Twitter Clone - Login', () => {

    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {
            statusCode: 200,
            fixture: 'download'
        }).as('cloudinary')
    });

    it('Ao fazer login com dados válidos, deve ser direcionado para o feed', () => {

        //Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
        //Request Method: GET

        cy.login()

        cy.visit('/')

        //cy.get ('input[type="email"]').type("afpteste@gmail.com")
        //cy.get ('input[type="password"]').type("teste123")
        //cy.get ('button[type="submit"]').click()

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6)

            
    });
});