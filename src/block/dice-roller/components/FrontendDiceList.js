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
	} );
	const {
		isRolling,
		dieRolls,
	} = data;

	const dice = {};
	const rolledDice = {};
	const rolledDiceRef = useRef( rolledDice );
	useEffect( () => {
		rolledDiceRef.current = rolledDice;
	}, [ rolledDice ] );

	dieLists.forEach( ( dieList ) => {
		const {
			die,
			number,
			multidiefn,
		} = dieList.dataset;

		const dieNum = parseInt( die.replace( 'd', '' ), 10 );

		dice[ die ] = {
			number,
			multiDieFn: multidiefn,
		};

		for ( let i = 0; i < number; i++ ) {
			const index = `${ die }_${ i }`;

			if ( isRolling ) {

				// Get new roll if rolling dice.
				rolledDice[ index ] = Math.ceil( Math.random() * dieNum );
			}

			// Retrieve existing roll value if exists and not currently rolling.
			dice[ die ][ `roll_${ i }` ] = dieRolls.hasOwnProperty( index ) ? dieRolls[ index ] : null;
		}
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
