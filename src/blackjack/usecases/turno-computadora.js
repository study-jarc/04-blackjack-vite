import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('puntosMinimos son necesarios');
    if ( !deck || deck.length === 0 ) throw new Error('El deck es necesario');
    if ( !puntosHTML || puntosHTML.length === 0 ) throw new Error('puntosHTML son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}