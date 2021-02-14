
const tabellsidaAllsvenskanUrl = 'https://prep.svenskfotboll.se/tabell-och-resultat/allsvenskan-herr-2020/82492/'

const inte_url_herrallsvenskan2019 = 'https://inte.svenskfotboll.se/tabell-och-resultat/allsvenskan-herrar/77486/'
const inte_url_damallsvenskan2019 = 'https://inte.svenskfotboll.se/tabell-och-resultat/obos-damallsvenskan/77346/'
const inte_url_herrfutsalligan20192020 = 'https://inte.svenskfotboll.se/tabell-och-resultat/svenska-futsalligan-201920/80427/'
const inte_url_herlandskamp2020 = 'https://inte.svenskfotboll.se/tabell-och-resultat/landskamp-herr-2020/82906/'

const prep_url_herrallsvenskan2019 = 'https://prep.svenskfotboll.se/tabell-och-resultat/allsvenskan-herrar/77486/'
const prep_url_damallsvenskan2019 = 'https://prep.svenskfotboll.se/tabell-och-resultat/obos-damallsvenskan/77346/'
const prep_url_herrfutsalligan20192020 = 'https://prep.svenskfotboll.se/tabell-och-resultat/svenska-futsalligan-201920/80427/'
const prep_url_herlandskamp2020 = 'https://prep.svenskfotboll.se/tabell-och-resultat/landskamp-herr-2020/82906/'

function kollaSpelprogramAllsvenskan(cy){

    cy.get('.mast-nav__wrapper--light > .mast-nav__track--mobile > :nth-child(2) > .mast-nav__track-link').click()

    cy.get(':nth-child(2) > .filter__option').click()


    cy.get(':nth-child(1) > .section > .match-list > .match-list__matches').children().find('span').each(($el, index, $list) => {
        if ($el.text() === 'Ope') {
            cy.log('ja')    
        }
      })
    
    cy.get('.container__main').contains('Omgång 1')
  
}

function kollaLagstatistikAllsvenskan(cy){

    
    cy.get('.mast-nav__wrapper--light > .mast-nav__track--mobile > :nth-child(4) > .mast-nav__track-link').click()
    
    cy.get('.mast-nav__wrapper--light > .mast-nav__track--mobile > :nth-child(4) > .mast-nav__track-link')

    cy.log('Tabellen ska innehålla 16 lag')
    cy.get('.table__scroll-track').find('img').should('have.length', 12)

}

function matchSidaAllsvenskanHerr(cy){

    if(window.location.href.indexOf("prep.sv") > -1){
        cy.log('Besöker tävlingssidan för herrallsvenskan - 2019')    
        cy.visit(prep_url_herrallsvenskan2019)
        
        cy.log('Tar översta laget i tabellen - letar efter bild')
        cy.get('.standings-table__table-container').find('a').eq(0).click()
        
        cy.log('Asserta en massa element på sidan som ska finnas')
        cy.get('.team-hero__headline > .headline').should('be.visible')
        cy.get('.team-image__src').should('be.visible')
        cy.get('.section-panel--first > :nth-child(2) > .container > .container__inner').should('be.visible')
        //cy.get(':nth-child(3) > .container > .container__inner').should('be.visible')
        //cy.get(':nth-child(5) > .container > .container__inner').should('be.visible')
        //cy.get(':nth-child(6) > .section > .container > .container__inner').should('be.visible')
    
    }else if(window.location.href.indexOf("inte.sv") > -1){
        cy.log('Besöker tävlingssidan för herrallsvenskan - 2019')    
        cy.visit(inte_url_herrallsvenskan2019)
        
        cy.log('Tar översta laget i tabellen - letar efter bild')
        cy.get('.standings-table__table-container').find('a').eq(0).click()
        
        cy.log('Asserta en massa element på sidan som ska finnas')
        cy.get('.team-hero__headline > .headline').should('be.visible')
        cy.get('.team-image__src').should('be.visible')
        cy.get('.section-panel--first > :nth-child(2) > .container > .container__inner').should('be.visible')
        //cy.get(':nth-child(3) > .container > .container__inner').should('be.visible')
        //cy.get(':nth-child(5) > .container > .container__inner').should('be.visible')
        //cy.get(':nth-child(6) > .section > .container > .container__inner').should('be.visible')
    }
    
    }
    
    function matchSidaAllsvenskanDam(cy){
    
        if(window.location.href.indexOf("prep.sv") > -1){
            cy.log('Besöker tävlingssidan för damallsvenskan - 2019')
            cy.visit(prep_url_damallsvenskan2019)
            
            cy.log('Tar översta laget i tabellen - letar efter bild')
            cy.get('.standings-table__table-container').find('a').eq(0).click()
            
            cy.log('Asserta en massa element på sidan som ska finnas')
            cy.get('.team-hero__headline > .headline').should('be.visible')
            cy.get('.team-image__src').should('be.visible')
            cy.get('.container__inner > .section-panel').should('be.visible')
            cy.get('.section-panel--first > :nth-child(2) > .container > .container__inner').should('be.visible')
            //cy.get(':nth-child(3) > .container > .container__inner').should('be.visible')
            //cy.get(':nth-child(6) > .container > .container__inner').should('be.visible')
        
        }else if(window.location.href.indexOf("inte.sv") > -1){
            cy.log('Besöker tävlingssidan för damallsvenskan - 2019')
            cy.visit(inte_url_damallsvenskan2019)
            
            cy.log('Tar översta laget i tabellen - letar efter bild')
            cy.get('.standings-table__table-container').find('a').eq(0).click()
            
            cy.log('Asserta en massa element på sidan som ska finnas')
            cy.get('.team-hero__headline > .headline').should('be.visible')
            cy.get('.team-image__src').should('be.visible')
            cy.get('.container__inner > .section-panel').should('be.visible')
            cy.get('.section-panel--first > :nth-child(2) > .container > .container__inner').should('be.visible')
            //cy.get(':nth-child(3) > .container > .container__inner').should('be.visible')
            //cy.get(':nth-child(6) > .container > .container__inner').should('be.visible')
        }
    
        }
    
        function matchSidaFutsalHerr(cy){
    
            if(window.location.href.indexOf("prep.sv") > -1){
                cy.log('Besöker tävlingssidan för futsal - 2019/2020')
                cy.visit(prep_url_herrfutsalligan20192020)
                
                cy.log('Tar översta laget i tabellen - letar efter bild')
                cy.get('.standings-table__table-container').find('a').eq(0).click()
                
                cy.log('Asserta en massa element på sidan som ska finnas')
                cy.get('.team-hero__headline > .headline').should('be.visible')
                cy.get('.container__inner > .section-panel').should('be.visible')
                cy.get('.section-panel--first > :nth-child(2) > .container > .container__inner').should('be.visible')
                cy.get(':nth-child(6) > .section > .container > .container__inner').should('be.visible')
            
            }else if(window.location.href.indexOf("inte.sv") > -1){
                cy.log('Besöker tävlingssidan för futsal - 2019/2020')
                cy.visit(inte_url_herrfutsalligan20192020)
                
                cy.log('Tar översta laget i tabellen - letar efter bild')
                cy.get('.standings-table__table-container').find('a').eq(0).click()
                
                cy.log('Asserta en massa element på sidan som ska finnas')
                cy.get('.team-hero__headline > .headline').should('be.visible')
                cy.get('.container__inner > .section-panel').should('be.visible')
                cy.get('.section-panel--first > :nth-child(2) > .container > .container__inner').should('be.visible')
                cy.get(':nth-child(6) > .section > .container > .container__inner').should('be.visible')
            }
    
            
            }    
    
            function matchSidaLandskampHerr(cy){
    
                if(window.location.href.indexOf("prep.sv") > -1){
                    cy.log('Besöker tävlingssidan för landskamp herr - 2020')
                    cy.visit(prep_url_herlandskamp2020)
                    
                    cy.log('Tar översta laget i tabellen - letar efter bild')
                    cy.get('.container__main').find('a').eq(0).click()
                    
                    cy.log('Asserta en massa element på sidan som ska finnas - Notera att detta är en match-sida')
                    //cy.get('.section-panel--frame').should('be.visible')
                    //cy.get('.tab-group__content').should('be.visible')
                    cy.get('#team-tab').click()
                    cy.get('#info-tab').click()
                
                }else if(window.location.href.indexOf("inte.sv") > -1){
                    cy.log('Besöker tävlingssidan för landskamp herr - 2020')
                    cy.visit(inte_url_herlandskamp2020)
                    
                    cy.log('Tar översta laget i tabellen - letar efter bild')
                    cy.get('.container__main').find('a').eq(0).click()
                    
                    cy.log('Asserta en massa element på sidan som ska finnas - Notera att detta är en match-sida')
                    //cy.get('.section-panel--frame').should('be.visible')
                    //cy.get('.tab-group__content').should('be.visible')
                    cy.get('#team-tab').click()
                    cy.get('#info-tab').click()
                }
    
                }


module.exports = {

kollaSpelprogramAllsvenskan,
kollaLagstatistikAllsvenskan,
matchSidaAllsvenskanHerr,
matchSidaAllsvenskanDam,
matchSidaFutsalHerr,
matchSidaLandskampHerr



}

