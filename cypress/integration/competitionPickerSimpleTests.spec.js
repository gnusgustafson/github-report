const targets = require('../targets/targets')
import * as tavlingsvaljaren_enkel from '../pages/competitionPickerSimple.js'

describe('Test för tävlingsväljaren - ENKEL', () => {
    
    
    beforeEach(() => {
        cy.viewport('iphone-x')
        cy.visit(targets.base_url_inte)
        //Klicka bort cookie-fönster
        cy.get('.button-link-group > :nth-child(2) > .button').click()
        cy.get('.mast-nav__track--mobile > :nth-child(5) > .mast-nav__track-link').click()
    })
    

    it('Enkel - kollar att alla element finns på sidan', () => {
        tavlingsvaljaren_enkel.kollaAllaElement(cy)
         
    }) 

    it('Enkel - kollar att soecifika tävlingar listas', () => {
        tavlingsvaljaren_enkel.enkelKollaSpecifikaTavling(cy)
         
    }) 

   it('Enkel - Klickar på allsvenskan och kollar att alla lag listas', () => {
       tavlingsvaljaren_enkel.enkelAllsvenskan(cy)
        
    }) 

    it('Enkel - Klickar på superettan och kollar att alla lag listas', () => {
        tavlingsvaljaren_enkel.enkelSuperettan(cy)
         
    }) 

    it('Enkel -  kolla sidan för damallsvenskan och att alla lag listas', () => {
        tavlingsvaljaren_enkel.enkelDamAllsvenskan(cy)
         
    }) 

    it('Enkel - kolla länkningar', () => {
        tavlingsvaljaren_enkel.kollaLankningar(cy)
         
    }) 

})  