/**
 * FRONTEND: Display and functionality of dice block on frontend.
 */
import FrontendDiceList from './components/FrontendDiceList';

const { render } = wp.element;

const wrapClass = 'wp-block-rave-dice-roller';
const rollers = document.querySelectorAll( `.${wrapClass}` );

rollers.forEach( ( roller ) => {
	const dieLists = roller.querySelectorAll( '.dice-list .die-list' );
	const dice = {};

	dieLists.forEach( ( dieList ) => {
		dice[ dieList.dataset.die ] = {
			number: dieList.dataset.number,
		};
	} );

	render(
		<FrontendDiceList
			dice={ dice }
			className={ wrapClass }
		/>,
		roller
	);
} );
