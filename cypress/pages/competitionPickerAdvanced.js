//Targets

const tavlingBtn = '.mast-nav__track--mobile > :nth-child(5) > .mast-nav__track-link'

const herrpojkBtn = '.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option'
const damFlickBtn = '.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option'
const seniorBtn = '.compfind__filter__age > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option'
const klubblagBtn = '.compfind__filter__type > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option'
const landslagBtn = '.compfind__filter__type > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option'


function kollaAllaElement(cy){
    
    cy.viewport('iphone-x')
    cy.visit('https://inte.svenskfotboll.se/tavlingsvaljaren/?filterType=2&associationId=1&ageCategoryId=-1&footballTypeId=1&typeId=Inget&seasonId=113')
    cy.get('.button-link-group > :nth-child(2) > .button').click()
    
    cy.log('Kollar knapparna för herr/dam')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track').should('be.visible')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option').contains('Dam/Flick')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option').contains('Herr/Pojk')
    
    cy.log('Dam ska inte vara förvalt')
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option')
    .should(($labels)=>{
        expect($labels).to.not.have.css('font-weight','700');
      })

    cy.log('Herr ska inte vara förvalt')  
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
    .should(($labels)=>{
      expect($labels).to.not.have.css('font-weight','700');
     })

    cy.log('Nationellt vara förvalt')
    cy.get('.compfind__filter__association > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
     .should(($labels)=>{
        expect($labels).to.have.css('font-weight','700');
       })

    cy.log('Förvalt årtal ska vara 2020')
    cy.get('.compfind__filter__season > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option')
    .should(($labels)=>{
        expect($labels).to.have.css('font-weight','700');
     })   

     cy.log('Ålder-Alla ska vara förvalt')
     cy.get('.compfind__filter__age > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
     .should(($labels)=>{
        expect($labels).to.have.css('font-weight','700');
       })

    cy.get('.compfind__filter__association > .compfind__filter-type__buttons > .filter__track').should('be.visible')

    cy.get('.compfind__filter__age > .compfind__filter-type__buttons > .filter__track').should('be.visible')
    
    cy.log('Bilden längst ner ska vara synlig - signalerar att inget har valts')
    cy.get('.compfind__gender-message__container').should('be.visible')

    //Kommer faila tills dess att buggen åtgärdad
    cy.log('Klubblag ska vara förvalt - kommer faila tills dess att den tas bort')
    cy.get('.compfind__filter__type > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(1) > .filter__option')
    .should(($labels)=>{
       expect($labels).to.have.css('font-weight','700');
      })

}

function kollaLankningar(cy){

    
    cy.viewport('iphone-x')
    cy.visit('https://inte.svenskfotboll.se/tavlingsvaljaren/?filterType=1&associationId=1&ageCategoryId=-1&footballTypeId=1&typeId=Inget&seasonId=113&genderId=2')
    //Klicka bort cookie-fönster
    cy.get('.button-link-group > :nth-child(2) > .button').click()
    
    cy.get('.compfind__filter__gender > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(2) > .filter__option').click({force:true})

    cy.get('.compfind__results-column-1').find('a')
    .each(($el, index, $list) => {

        if(index < 15 && $el.text() !== 'Division 2 Testland Norra'){
        cy.get('.compfind__results-column-1').find('a').eq(index+12)
        .should('have.attr', 'href').and('include', 'tabell-och-resultat')
        }

    })
}

function avanceradKollaSpecifikaTavling(cy){

cy.viewport('iphone-x')
cy.visit('https://inte.svenskfotboll.se/tavlingsvaljaren/?filterType=2&associationId=1&ageCategoryId=4&footballTypeId=1&typeId=Inget&seasonId=113&genderId=2')
cy.get('.button-link-group > :nth-child(2) > .button').click()



cy.log('Kolla herrtävlingar 2020')

cy.get('.compfind__results-column-1').contains('Division 3, herrar')
cy.get('.compfind__results-column-1').contains('Division 2, herrar')
cy.get('.compfind__results-column-1').contains('Superettan')


cy.log('Klicka på dam/flick')
cy.get(damFlickBtn).click({force: true})

cy.log('Kolla damtävlingar 2020')
cy.get('.compfind__results-column-1').contains('OBOS Damallsvenskan 2020')
//cy.get('.compfind__results-column-1').contains('Elitettan 2020')
cy.get('.compfind__results-column-1').contains('Division 1, damer')


cy.log('Klicka på Senior -> DAM/FLICK')
cy.get(seniorBtn).click({force: true})

cy.log('Senior - damtävlingar 2020')
cy.get('.compfind__results-column-1').contains('OBOS Damallsvenskan 2020')
//cy.get('.compfind__results-column-1').contains('Elitettan 2020')
cy.get('.compfind__results-column-1').contains('Division 1, damer')


cy.log('Gå tillbaka till herr/pojk -> Senior')
cy.get(herrpojkBtn).click({force: true})

cy.log('Senior - herrtävlingar 2020')
cy.get('.compfind__results-column-1').contains('Division 3, herrar')
cy.get('.compfind__results-column-1').contains('Division 2, herrar')
cy.get('.compfind__results-column-1').contains('Superettan')

cy.log('Klicka på 2019')
cy.get('.compfind__filter__season > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(3) > .filter__option').click()

cy.log('Senior - herrtävlingar 2019')
cy.get('.compfind__results-column-1').contains('Allsvenskan, herr')
cy.get('.compfind__results-column-1').contains('Superettan')
cy.get('.compfind__results-column-1').contains('Ettan')

cy.log('Klicka på dam/flick')
cy.get(damFlickBtn).click({force: true})

cy.log('Senior - damtävlingar 2019')
cy.get('.compfind__results-column-1').contains('OBOS Damallsvenskan')
cy.get('.compfind__results-column-1').contains('Elitettan')
cy.get('.compfind__results-column-1').contains('Division 1, damer')

cy.log('Klicka på Senior -> DAM/FLICK')
cy.get(seniorBtn).click({force: true})

cy.get('.compfind__results-column-1').contains('OBOS Damallsvenskan')
cy.get('.compfind__results-column-1').contains('Elitettan')
cy.get('.compfind__results-column-1').contains('Division 1, damer')

cy.log('Gå tillbaka till herr/pojk -> Senior')
cy.get(herrpojkBtn).click({force: true})

cy.get('.compfind__results-column-1').contains('Allsvenskan, herr')
cy.get('.compfind__results-column-1').contains('Superettan')
cy.get('.compfind__results-column-1').contains('Ettan')

}

function kollaTvaTavlingar2018(cy){

cy.viewport('iphone-x')
cy.visit('https://inte.svenskfotboll.se/tavlingsvaljaren/?filterType=2&associationId=1&ageCategoryId=-1&footballTypeId=1&typeId=Inget&seasonId=113')
cy.get('.button-link-group > :nth-child(2) > .button').click()



cy.log('Klicka på herr/pojk')
cy.get(herrpojkBtn).click({force: true})



cy.log('Klicka på 2018')
cy.get('.compfind__filter__season > .compfind__filter-type__buttons > .filter__track > .filter__options > :nth-child(4) > .filter__option').click({force: true})

cy.log('Klicka på Allsvenskan')
cy.get('.compfind__results-column-1', {timeout: 15000}).find('a').each(($el, index, $list) => {
 if ($el.text() === 'Allsvenskan, herrar') {
     //Hittar föreningslänken utefter att den bara innehåller "GAIS" JQuery
     cy.get('.compfind__results-column-1').find('a').eq(index).click({force: true})
 }
})

cy.get('.standings-table__table-container').should('be.visible')

}

function kollaNationellaTavlingar(cy){
    
    cy.viewport('iphone-x')
    cy.visit('https://inte.svenskfotboll.se/tavlingsvaljaren/?filterType=2&associationId=1&ageCategoryId=-1&footballTypeId=1&typeId=Inget&seasonId=113')
    cy.get('.button-link-group > :nth-child(2) > .button').click()
    
    cy.get(herrpojkBtn).click({force: true})
    cy.get(landslagBtn).click({force: true})

    cy.get('.compfind__results-column-1').contains('Landskamper herr senior')
    cy.get('.compfind__results-column-1').contains('Landskamper herr ungdom')

    cy.log('Loopar 20 första tävlingarna och kollar att länkningen går mot tabell-och-resultat')
    cy.get('.compfind__results-column-1').find('a')
    .each(($el, index, $list) => {
        if($el.attr('href') !== '/landslag/herr/tid-ej-faststalld/'){
        cy.get('.compfind__results-column-1').find('a').eq(index)
        .should('have.attr', 'href').and('include', 'tabell-och-resultat')
        }

    })

    cy.get(damFlickBtn).click({force: true})

    

    cy.get('.compfind__results-column-1').contains('Landskamper dam senior')
    cy.get('.compfind__results-column-1').contains('Landskamper dam ungdom')
    
    cy.log('Loopar 20 första tävlingarna och kollar att länkningen går mot tabell-och-resultat')
    
    cy.get('.compfind__results-column-1').find('a')
    .each(($el, index, $list) => {
        if($el.attr('href') !== '/landslag/herr/tid-ej-faststalld/'){
        cy.get('.compfind__results-column-1').find('a').eq(index)
        .should('have.attr', 'href').and('include', 'tabell-och-resultat')
        }

    })

}




module.exports = {
    kollaAllaElement,
    avanceradKollaSpecifikaTavling,
    kollaTvaTavlingar2018,
    kollaLankningar,
    kollaNationellaTavlingar
    

}