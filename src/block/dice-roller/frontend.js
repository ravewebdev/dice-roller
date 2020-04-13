const rollerClass = '.wp-block-rave-dice-roller';
const rollers = document.querySelectorAll( rollerClass );

rollers.forEach( ( roller, index ) => {
	rollCurrentDice( roller );
} );

/**
 * Handle rolling dice in current block.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {DOM element} roller Roller DOM element.
 * @return {void}
 */
function rollCurrentDice( roller ) {
	const button = roller.querySelectorAll( '.roll-dice' );

	if ( ! button.length ) {
		return;
	}
}
