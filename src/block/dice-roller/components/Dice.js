/**
 * Display selected dice icons.
 */
import icons from '../icons';

const Dice = ( props ) => {
	const {
		dice,
		emptyText,
		isLive,
		isRolling,
	} = props;

	let selectedDice = Object.entries( dice ).filter( ( die ) => {
		return ( 0 < die[ 1 ].number );
	} );

	selectedDice = selectedDice.map( ( die ) => {
		const key = die[ 0 ];
		const attrs = die[ 1 ];
		const currentDice = [];

		for ( let i = 0; i < attrs.number; i++ ) {
			const roll = isLive ? attrs[ `roll_${ i }` ] : null;

			currentDice.push(
				<div className="die" key={ `${ key }_${ i }` }>
					{ icons[ key ] }
					{ isLive && (
						<div className="die-roll">{ roll }</div>
					) }
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
					<div className={ `die-list ${ key } ${ isRolling ? 'rolling' : '' }` } data-die={ key } data-number={ diceList.length } key={ key }>
						{ diceList }
					</div>
				) )
			) }
		</div>
	);
};

export default Dice;
