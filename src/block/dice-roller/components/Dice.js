/**
 * Display selected dice icons.
 */
import icons from '../icons';

const Dice = ( props ) => {
	const {
		dice,
		emptyText,
	} = props;
	let selectedDice = Object.entries( dice ).filter( ( die ) => {
		return ( 0 < die[ 1 ].number );
	} );

	selectedDice = selectedDice.map( ( die ) => {
		const key = die[ 0 ];
		const attrs = die[ 1 ];
		const currentDice = [];

		for ( let i = 0; i < attrs.number; i++ ) {
			currentDice.push( icons[ key ] );
		}

		return currentDice;
	} );

	return ( 0 === selectedDice.length ? emptyText : selectedDice );
};

export default Dice;
