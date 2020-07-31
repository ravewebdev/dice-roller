/**
 * Display frontend dice list.
 */

import Dice from './Dice';

const {
	i18n: {
		__,
	},
	element: {
		useEffect,
		useRef,
		useState,
	},
	hooks: {
		applyFilters,
	},
} = wp;

/**
 * Frontend Dice Roller.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Component props.
 * @return {ReactElement} Component render JSX.
 */
const FrontendDiceList = ( props ) => {
	const {
		dieLists,
	} = props;

	const [ data, setData ] = useState( {
		isRolling: false,
		dieRolls: {},
		dieResults: {},
	} );

	const {
		isRolling,
		dieRolls,
		dieResults,
	} = data;

	// Update dieRolls state and end roll if isRolling is true.
	useEffect( () => {
		if ( ! isRolling ) {
			return;
		}

		const timer = setTimeout( () => {
			setData( {
				...data,
				...{
					isRolling: false,
					dieRolls: {
						...rolledDiceRef.current,
					},
					dieResults: {
						...rollResultsRef.current,
					},
				},
			} );
		}, 750 );

		return () => clearTimeout( timer );
	}, [ isRolling ] );

	const dice = {},
		rolledDice = {},
		rolledDiceRef = useRef( rolledDice );

	useEffect( () => {
		rolledDiceRef.current = rolledDice;
	}, [ rolledDice ] );

	const rollResults = {},
		rollResultsRef = useRef( rollResults );

	useEffect( () => {
		rollResultsRef.current = rollResults;
	}, [ rollResults ] );

	dieLists.forEach( ( dieList ) => {
		const {
			die,
			number,
			multidiefn,
		} = dieList.dataset;

		const dieNum = parseInt( die.replace( 'd', '' ), 10 ),
			rolls = [];

		dice[ die ] = {
			number,
			multiDieFn: multidiefn,
		};

		// Handle individual die rolls.
		for ( let i = 0; i < number; i++ ) {
			const index = `${ die }_${ i }`;

			if ( isRolling ) {

				// Get new roll if rolling dice.
				const roll = Math.ceil( Math.random() * dieNum );
				rolledDice[ index ] = roll;
				rolls.push( roll );
			}

			// Retrieve existing roll value if exists and not currently rolling.
			dice[ die ][ `roll_${ i }` ] = dieRolls.hasOwnProperty( index ) ? dieRolls[ index ] : null;
		}

		// Perform multi-die function if set.
		if ( isRolling && multidiefn && 0 < rolls.length ) {
			let rollResult = null,
				message = '';

			switch ( multidiefn ) {

				// Add all rolls together.
				case 'sum':
					rollResult = rolls.reduce( ( total, roll ) => {
						if ( 'number' !== typeof roll ) {
							return total;
						}

						return total + parseInt( roll, 10 );
					}, 0 );
					rollResult = 0 === rollResult ? null : rollResult;
					message = __( 'Total:', 'dice-roller' );
					break;

				// Keep highest roll.
				case 'take-highest':
					rollResult = Math.max( ...rolls );
					message = __( 'Highest:', 'dice-roller' );
					break;

				// Keep lowest roll.
				case 'take-lowest':
					rollResult = Math.min( ...rolls );
					message = __( 'Lowest:', 'dice-roller' );
					break;

				// Drop highest roll.
				case 'drop-highest':
					rolls.splice( rolls.indexOf( Math.max( ...rolls ) ), 1 );
					rollResult = ! Array.isArray( rolls ) ? null : rolls.join( ', ' );
					message = __( 'Highest Dropped:', 'dice-roller' );
					break;

				// Drop lowest roll.
				case 'drop-lowest':
					rolls.splice( rolls.indexOf( Math.min( ...rolls ) ), 1 );
					rollResult = ! Array.isArray( rolls ) ? null : rolls.join( ', ' );
					message = __( 'Lowest Dropped:', 'dice-roller' );
					break;

				// Drop highest roll & sum.
				case 'sum-lowest':
					rolls.splice( rolls.indexOf( Math.max( ...rolls ) ), 1 );
					rollResult = ! Array.isArray( rolls ) ? null : rolls.reduce( ( roll1, roll2 ) => parseInt( roll1, 10 ) + parseInt( roll2, 10 ) );
					message = __( 'Sum with Highest Dropped:', 'dice-roller' );
					break;

				// Drop lowest roll & sum.
				case 'sum-highest':
					rolls.splice( rolls.indexOf( Math.min( ...rolls ) ), 1 );
					rollResult = ! Array.isArray( rolls ) ? null : rolls.reduce( ( roll1, roll2 ) => parseInt( roll1, 10 ) + parseInt( roll2, 10 ) );
					message = __( 'Sum with Lowest Dropped:', 'dice-roller' );
					break;
			}

			/**
			 * Customize the die roll result message.
			 *
			 * @since  NEXT
			 *
			 * @param  {string}         message     Full result message.
			 * @param  {string}         messageText Result message text, minus actual roll result.
			 * @param  {?number|string} result      Roll result.
			 * @param  {string}         multidiefn  Multi-die handling function name.
			 */
			message = applyFilters( 'rave.diceRoller.rollResult', `${ message } ${ rollResult }`, message, rollResult, multidiefn );

			rollResults[ die ] = null === rollResult ? null : {
				message,
				value: rollResult,
			};
		}

		dice[ die ].result = dieResults.hasOwnProperty( die ) ? dieResults[ die ] : null;
	} );

	return (
		<>
			<Dice
				dice={ dice }
				emptyText={ null }
				isLive={ true }
				isRolling={ isRolling }
			/>
			<button
				type="button"
				className="roll-dice"
				disabled={ isRolling }
				onClick={ () => {
					setData( {
						...data,
						isRolling: true,
					} );
				} }
			>
				{ isRolling ? __( 'Rolling...', 'dice-roller' ) : __( 'Roll these dice!', 'dice-roller' ) }
			</button>
		</>
	);
};

export default FrontendDiceList;
