describe('registration functionality', () => {
    it('register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')  
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('irinush')
        cy.get('#loginPanel > form > div:nth-child(4) > input').type('Test1234')
        cy.get('#loginPanel > form > div:nth-child(5) > input').click()

        cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.get('#month').select(1)
        cy.get('#month').select('March')
        cy.get('#month').select('May')
    })
  })