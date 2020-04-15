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
	const button = roller.querySelectorAll( '.roll-dice' );

	if ( ! button.length ) {
		return;
	}

	button[ 0 ].addEventListener( 'click', function() {
		const dice = roller.querySelectorAll( '.dice-list .die-list' );

		dice.forEach( animateDice );
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
 */
function animateDice( dieList, index ) {
	setTimeout( function() {
		dieList.classList.toggle( rollingClass );
	}, 1000 * ( index ) );
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

		dieList.classList.toggle( rollingClass );
	}, 1000 * ( index + 1 ) );
}
