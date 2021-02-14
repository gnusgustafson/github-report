const targets = require('../targets/targets')
import * as tavlingsvaljaren_avancerad from '../pages/competitionPickerAdvanced.js'

describe('Test för tävlingsväljaren - Avancerad', () => {
    
    
    
    it('Avancerad - Kollar alla element i avancerad tävlingsväljare', () => {          
        
        tavlingsvaljaren_avancerad.kollaAllaElement(cy)
         
    }) 

    it('Avancerad - kollar att specifika tävlingar listas', () => {

        tavlingsvaljaren_avancerad.avanceradKollaSpecifikaTavling(cy)
         
    }) 

    it('Avancerad - kollar att länkningen stämmer för tävlingarna', () => {
        tavlingsvaljaren_avancerad.kollaLankningar(cy)
         
    }) 
    

    it('Avancerad - Klickar in på två tävlingar 2018', () => {
        tavlingsvaljaren_avancerad.kollaTvaTavlingar2018(cy)
         
    }) 


    it('Avancerad - kollar att nationella tävlingar visas och att länkningen stämmer dam/her', () => {
        tavlingsvaljaren_avancerad.kollaNationellaTavlingar(cy)
         
    }) 

}) 