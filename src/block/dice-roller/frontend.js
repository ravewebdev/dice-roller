/**
 * FRONTEND: Dice Roller Block
 */

import FrontendDiceList from './components/FrontendDiceList';

const {
	element: {
		render,
	},
} = wp;

const wrapClass = '.wp-block-rave-dice-roller',
	rollers = document.querySelectorAll( wrapClass );

/**
 * Retrieve and re-render dice roller blocks.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} roller Block DOM element.
 */
rollers.forEach( ( roller ) => {
	const dieLists = roller.querySelectorAll( '.dice-list .die-list' );

	render(
		<FrontendDiceList
			dieLists={ dieLists }
		/>,
		roller
	);
} );
