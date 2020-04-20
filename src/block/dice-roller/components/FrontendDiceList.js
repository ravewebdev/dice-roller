/**
 * Display frontend dice list.
 */
import { __ } from '@wordpress/i18n';
import { useState, useRef, useEffect } from 'react';

import Dice from './Dice';

const FrontendDiceList = ( props ) => {
	const {
		dieLists,
		className,
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

	const dice = {};
	const rolledDice = {};
	const rolledDiceRef = useRef( rolledDice );
	useEffect( () => {
		rolledDiceRef.current = rolledDice;
	}, [ rolledDice ] );
	const rollResults = {};
	const rollResultsRef = useRef( rollResults );
	useEffect( () => {
		rollResultsRef.current = rollResults;
	}, [ rollResults ] );

	dieLists.forEach( ( dieList ) => {
		const {
			die,
			number,
			multidiefn,
		} = dieList.dataset;

		const dieNum = parseInt( die.replace( 'd', '' ), 10 );
		const rolls = [];

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
			let rollResult = null;

			switch ( multidiefn ) {

				// Add all rolls together.
				case 'sum':
					rollResult = rolls.reduce( ( total, roll ) => {
						if ( 'number' !== typeof roll ) {
							return total;
						}

						return total + parseInt( roll, 10 );
					}, 0 );

					rollResults[ die ] = 0 === rollResult ? null : __( 'Total: ', 'dice-roller' ) + rollResult;
					break;

				// Keep highest roll.
				case 'take-highest':
					rollResult = Math.max( ...rolls );
					rollResults[ die ] = null === rollResult ? null : __( 'Highest: ', 'dice-roller' ) + rollResult;
					break;

				// Keep lowest roll.
				case 'take-lowest':
					rollResult = Math.min( ...rolls );
					rollResults[ die ] = null === rollResult ? null : __( 'Lowest: ', 'dice-roller' ) + rollResult;
					break;

				// Drop highest roll.
				case 'drop-highest':
					rollResult = rolls.filter( ( roll ) => {
						return roll !== Math.max( ...rolls );
					} );
					rollResults[ die ] = null === rollResult ? null : __( 'Highest Dropped: ', 'dice-roller' ) + rollResult.join( ', ' );
					break;

				// Drop lowest roll.
				case 'drop-lowest':
					break;
			}
		}

		dice[ die ].result = dieResults.hasOwnProperty( die ) ? dieResults[ die ] : null;
	} );

	return (
		<div className={ className }>
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

					// Update dieRolls state and end roll.
					setTimeout( () => {
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
				} }
			>
				{ isRolling ? __( 'Rolling...', 'dice-roller' ) : __( 'Roll these dice!', 'dice-roller' ) }
			</button>
		</div>
	);
};

export default FrontendDiceList;
