import icons from './icons';

const { render } = wp.element;

const wrapClass = '.wp-block-rave-dice-roller';
const rollers = document.querySelectorAll( wrapClass );
const rollingClass = 'rolling';

rollers.forEach( ( roller ) => {
	rollCurrentDice( roller );
} );

/**
 * Handle rolling dice in current block.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} roller Roller DOM element.
 * @return {void}
 */
function rollCurrentDice( roller ) {
	let button = roller.querySelectorAll( '.roll-dice' );

	if ( ! button.length ) {
		return;
	}

	button = button[0];

	button.addEventListener( 'click', function() {
		const dice = roller.querySelectorAll( '.dice-list .die-list' );
		const delay = 750;

		button.disabled = true; // Disable button.

		dice.forEach( ( dieList, index ) => {
			animateDice( dieList, index, delay );
		} );

		// Enable button when animation completes.
		setTimeout( function() {
			button.disabled = false;
		}, delay * dice.length );
	} );
}

/**
 * Animates all of current die type.
 *
 * Use timeout delays to display "rolling" animation.
 *
 * @author Rebekah Van Epps <rebekah.vanepps@webdevstudios.com>
 * @since  1.0.0
 *
 * @param  {Object} dieList Wrapper node for current die list.
 * @param  {number} index   Index of current die list.
 * @param  {number} delay   Number of milliseconds to delay between animations.
 */
function animateDice( dieList, index, delay ) {
	setTimeout( function() {
		dieList.classList.toggle( rollingClass ); // Start animation.
	}, delay * ( index ) );
	setTimeout( function() {
		const dieNum = parseInt( dieList.dataset.die.replace( 'd', '' ), 10 );
		const dice = dieList.querySelectorAll( '.die' );

		dice.forEach( ( die ) => {
			const roll = Math.ceil( Math.random() * dieNum );
			render(
				<>
					{ icons[ dieList.dataset.die ] }
					<div className="die-roll">
						{ roll }
					</div>
				</>,
				die
			);
		} );

		dieList.classList.toggle( rollingClass ); // Stop animation.
	}, delay * ( index + 1 ) );
}
