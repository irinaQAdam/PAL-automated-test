describe('handeling dynamic drop-down', () => {
    it('register new user', () => {
        cy.visit('https://wizzair.com/ro-ro', {headers: {"Accept-Encoding":"gzip, deflate"}})  
        cy.wait(200)
        cy.get('#wa-autocomplete-input-4').click().clear().type("ala", {delay:8000})
        cy.get('.ds-locations-container strong mark').each(($el, index, $list)  =>  {
            cy.log($el.text())
            if($el.text() === 'man'){
                $el.click()
            }
        })
    })
  })