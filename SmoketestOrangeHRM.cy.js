    describe("Test suite - Conjunto de Pruebas",() => {

        beforeEach(() =>{
            cy.visit('https://opensource-demo.orangehrmlive.com/')


        })
    it("Automatiza una suite de pruebas  con casos para que se valide los elementos básicos de la página de inicio",() => {
        cy.get(".orangehrm-login-branding > img").should("be.visible")
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM")
        cy.get('.oxd-button').should("be.visible")

    })

    it("Automatiza un caso para validar la pagina de adicionar usuarios",() => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-autocomplete-text-input > input').type("Juan")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")


    })

    it("Validar 3",() => {

        


    })

})