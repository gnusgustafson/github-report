const targets = require('../targets/targets')
import * as  tabellsida from '../pages/competitionPage.js'

describe('Tabellsida för olika tävlingar', () => {
    
    beforeEach(() => {
        cy.viewport('iphone-x')
        cy.log('Besök tabellsidan för allsvenskan')
        cy.visit('https://inte.svenskfotboll.se/tabell-och-resultat/div-1-norrland-dam-2020/82132/')
        //Klicka bort cookie-fönster
        cy.get('.button-link-group > :nth-child(2) > .button').click()
        //cy.get('.mast-nav__track--mobile > :nth-child(5) > .mast-nav__track-link').click()
    })
    

    it('Tabellsida - kollar spelprogram för allsvenskan', () => {
        tabellsida.kollaSpelprogramAllsvenskan(cy)
         
    }) 

    it('Tabellsida - kollar lagstatistik', () => {
        tabellsida.kollaLagstatistikAllsvenskan(cy)
    })

    it('Kontrollerar lagsida för ett lag i allsvenskan', () => {
        cy.visit(targets.base_url_inte)
        tabellsida.matchSidaAllsvenskanHerr(cy)  
     }) 
 
     it('Kontrollerar lagsida för ett lag i damallsvenskan', () => {
        cy.visit(targets.base_url_inte)
        tabellsida.matchSidaAllsvenskanDam(cy)  
      }) 
 
      it('Kontrollerar lagsida för ett lag i futsalligan', () => {
        cy.visit(targets.base_url_inte)
        tabellsida.matchSidaFutsalHerr(cy)
      })  
 
      it('Denna kontrollerar en match-sida för en landskamp', () => {
        cy.visit(targets.base_url_inte)
        tabellsida.matchSidaLandskampHerr(cy)
      }) 


}) 