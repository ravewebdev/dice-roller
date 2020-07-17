/**
 * Display selected dice icons.
 */

import icons from '../icons';

/**
 * Handle render of dice.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Component props.
 * @return {ReactElement} Component render JSX.
 */
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

	/**
	 * Iterate over selected dice, displaying icons and rolls.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {array} die Current die data.
	 * @return {object}    Formatted die data.
	 */
	selectedDice = selectedDice.map( ( die ) => {
		const key = die[ 0 ],
			attrs = die[ 1 ],
			currentDice = [];

		for ( let i = 0; i < attrs.number; i++ ) {
			const roll = isLive ? attrs[ `roll_${ i }` ] : null;

			currentDice.push(
				<div className="die" key={ `${ key }_${ i }` }>
					{ icons[ key ] }
					{ isLive && (
						<div className="die-roll">
							{ roll }
						</div>
					) }
				</div>
			);
		}

		return {
			key,
			multiDieFn: attrs.multiDieFn,
			diceList: [ ...currentDice ],
			rollResult: attrs.result,
		};
	} );

	return (
		<div className="dice-list">
			{ 0 === selectedDice.length ? emptyText : (
				selectedDice.map( ( { key, multiDieFn, diceList, rollResult } ) => {

					return (
						<div
							className={ `die-list ${ key } ${ isRolling ? 'rolling' : '' }` }
							data-die={ key }
							data-number={ diceList.length }
							data-multidiefn={ multiDieFn }
							key={ key }
						>
							{ diceList }
							{ multiDieFn && rollResult && (
								<div className="die-result">
									{ rollResult }
								</div>
							) }
						</div>
					);
				} )
			) }
		</div>
	);
};

export default Dice;
