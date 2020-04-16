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
			currentDice.push(
				<div className="die">
					{ icons[ key ] }
				</div>
			);
		}

		return {
			key,
			diceList: [ ...currentDice ],
		};
	} );

	return (
		<div className="dice-list">
			{ 0 === selectedDice.length ? emptyText : (
				selectedDice.map( ( { key, diceList } ) => (
					<div className={ `die-list ${ key }` } data-die={ key } data-number={ diceList.length } key={ key }>
						{ diceList }
					</div>
				) )
			) }
		</div>
	);
};

export default Dice;
