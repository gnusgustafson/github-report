//Targets

const tavlingBtn = '.mast-nav__track--mobile > :nth-child(5) > .mast-nav__track-link'


//Targets enkel filtrering

const herrpojkBtn = '.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option'
const damFlickBtn = '.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option'
const seniorBtn = '.compfind__filter__age > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option'

function kollaAllaElement(cy){

    cy.log('Kolla att dam/herr knapparna finns')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track').should('be.visible')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option').contains('Dam/Flick')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option').contains('Herr/Pojk')
    
    cy.log('Dam/Herr ska inte vara förifyllda')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option')
    .should(($labels)=>{
        expect($labels).to.not.have.css('font-weight','700');
      })

    cy.log('Dam/Herr ska inte vara förifyllda')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
    .should(($labels)=>{
      expect($labels).to.not.have.css('font-weight','700');
     })

     cy.log('Nationellt ska vara förifylld')
     cy.get('.compfind__filter__association > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
     .should(($labels)=>{
        expect($labels).to.have.css('font-weight','700');
       })

    cy.log('Alla ska vara förifylld')
    cy.get('.compfind__filter__age > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
     .should(($labels)=>{
        expect($labels).to.have.css('font-weight','700');
       })

    cy.log('Kollar olika statiska element samt att bilden längst ner syns')
    cy.get('.compfind__filter__association > .compfind__filter-type__buttons > .filter__track').should('be.visible')

    cy.get('.compfind__filter__age > .compfind__filter-type__buttons > .filter__track').should('be.visible')
    
    cy.get('.compfind__gender-message__container').should('be.visible')

}

function kollaLankningar(cy){
    //Denna funktion kolla länkningar till alla tävlingar som listas
    
    cy.log('Klicka på herr/pojk')
    cy.get(herrpojkBtn).click()
    
    cy.log('Loopar 20 första tävlingarna och kollar att länkningen går mot tabell-och-resultat')
    cy.get('.compfind__results-column-1').find('a')
    .each(($el, index, $list) => {

        if(index < 20 && $el.text() !== 'Division 2 Testland Norra'){
        cy.get('.compfind__results-column-1').find('a').eq(index)
        .should('have.attr', 'href').and('include', 'tabell-och-resultat')
        }

    })
}


function enkelAllsvenskan(cy){
    
    cy.log('Klicka på herr/pojk')
    cy.get(herrpojkBtn).click()

    cy.log('Kör igång en loop som letar upp knappen för allsvenskan och klickar på den')
    cy.get('.compfind__results-column-1').find('a').each(($el, index, $list) => {
        if ($el.text() === 'Superettan 2020') {
            //Hittar föreningslänken utefter att den bara innehåller "GAIS" JQuery
            cy.get('.compfind__results-column-1').find('a').eq(index).click({force: true})
        }
      })

      cy.log('Tabellen ska innehålla 16 lag')
      cy.get('.standings-table__table-container').find('img').should('have.length', 16)


      //cy.get('.container__main').contains('Kommande matcher')
}

function enkelSuperettan(cy){
    
    cy.log('Klicka på herr/pojk')
    cy.get(herrpojkBtn).click({force: true})

    cy.log('Kör igång en loop som letar upp knappen för allsvenskan och klickar på den')
    cy.get('.compfind__results-column-1').find('a').each(($el, index, $list) => {
        if ($el.text() === 'Div 2 Norrland, herr 2020') {
            //Hittar föreningslänken utefter att den bara innehåller "GAIS" JQuery
            cy.get('.compfind__results-column-1').find('a').eq(index).click({force: true})
        }
      })

      cy.log('Tabellen ska innehålla 16 lag')
      cy.get('.standings-table__table-container').find('img').should('have.length', 14)


      cy.get('.container__main').contains('Kommande matcher')
}

function enkelDamAllsvenskan(cy){
    
    cy.log('Klicka på dam/flick')
    cy.get(damFlickBtn).click({force: true})

    cy.log('Kör igång en loop som letar upp knappen för allsvenskan och klickar på den')
    cy.get('.compfind__results-column-1').find('a').each(($el, index, $list) => {
        if ($el.text() === 'OBOS Damallsvenskan 2020') {
            //Hittar föreningslänken utefter att den bara innehåller "GAIS" JQuery
            cy.get('.compfind__results-column-1').find('a').eq(index).click({force: true})
        }
      })

      cy.log('Tabellen ska innehålla 12 lag')
      cy.get('.standings-table__table-container').find('img').should('have.length', 12)


      //cy.get('.container__main').contains('Kommande matcher')
}


function enkelKollaSpecifikaTavling(cy){
    
    cy.log('Klicka på herr/pojk')
    cy.get(herrpojkBtn).click()

    cy.get('.compfind__results-column-1').contains('Ettan Norra 2020')
    cy.get('.compfind__results-column-1').contains('Division 2, herrar')
    cy.get('.compfind__results-column-1').contains('Division 3, herrar')
    cy.get('.compfind__results-column-1').contains('Landskamper herr senior')
    cy.get('.compfind__results-column-1').contains('Landskamp Herr')

    cy.log('Klicka på dam/flick')
    cy.get(damFlickBtn).click()

    cy.get('.compfind__results-column-1').contains('OBOS Damallsvenskan 2020')
    //cy.get('.compfind__results-column-1').contains('Elitettan 2020')
    cy.get('.compfind__results-column-1').contains('Division 1, damer')
    cy.get('.compfind__results-column-1').contains('Landskamper dam senior')
    
    cy.log('Klicka på Senior -> DAM/FLICK')
    cy.get(seniorBtn).click()

    cy.get('.compfind__results-column-1').contains('OBOS Damallsvenskan 2020')
    //cy.get('.compfind__results-column-1').contains('Elitettan 2020')
    cy.get('.compfind__results-column-1').contains('Division 1, damer')
    cy.get('.compfind__results-column-1').contains('Landskamper dam senior')

    cy.log('Gå tillbaka till herr/pojk -> Seniora tävlingar')
    cy.get(herrpojkBtn).click()

    cy.get('.compfind__results-column-1').contains('Ettan Norra 2020')
    cy.get('.compfind__results-column-1').contains('Division 2, herrar')
    cy.get('.compfind__results-column-1').contains('Division 3, herrar')
    cy.get('.compfind__results-column-1').contains('Landskamper herr senior')
    cy.get('.compfind__results-column-1').contains('Landskamp Herr')

}




module.exports = {
    enkelAllsvenskan,
    enkelSuperettan,
    enkelDamAllsvenskan,
    enkelKollaSpecifikaTavling,
    kollaAllaElement,
    kollaLankningar

}