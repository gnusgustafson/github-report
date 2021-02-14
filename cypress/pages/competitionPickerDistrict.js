//Targets


function kollaAllaElement(cy){

    
    cy.log('kolla att sökfältet finns')
    cy.get('.club-search__search')

    cy.log('kolla att logotypen finns')
    cy.get('.club-search__noclub-message__container')


}

function sokForening(cy){
            
        cy.log('Klicka på "Sök via förening')
        cy.get(':nth-child(3) > .tab-group__button > .icon-text').click()
        
        cy.get('.club-search__search').type('Hammarby Fotboll AB', { delay: 100 })

        cy.get('.club-search__clubs-item--link').click()

        cy.wait(5000)

        cy.get('.club-search__results-column-1').should('be.visible')
        cy.get('.club-search__results-column-1').find('a')

}






module.exports = {
    kollaAllaElement,
    sokForening,

    

}