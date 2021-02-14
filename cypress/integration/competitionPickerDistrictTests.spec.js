const targets = require('../targets/targets')
import * as tavlingsvaljaren_forening from '../pages/competitionPickerDistrict.js'

describe('Test för tävlingsväljaren - Förening', () => {
    
    beforeEach(() => {
        cy.viewport('iphone-x')
        cy.visit("https://stockholm-inte.svenskfotboll.se/tavling/tavlingsvaljaren/")
        //Klicka bort cookie-fönster
        cy.get('.button-link-group > :nth-child(2) > .button').click()
    })
    
    it('Förening - Kollar alla element för föreningssök i tävlingsväljaren finns', () => {
        tavlingsvaljaren_forening.kollaAllaElement(cy)
         
    }) 
    
    it('Förening - sök efte rhammarby och kolla att tävlingar listas', () => {
        tavlingsvaljaren_forening.sokForening(cy)
         
    }) 


}) 