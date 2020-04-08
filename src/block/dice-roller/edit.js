/**
 * EDIT: Dice Roller Block.
 */
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import DiceInput from './components/DiceInput';
import icons from './icons';

const Edit = ( props ) => {
	const {
		attributes: {
			dice,
		},
		className,
		setAttributes,
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

	// Update number of current die.
	const onChangeDice = ( die, number ) => {
		const newDice = { ...dice };
		number = 0 > number ? 0 : number;
		newDice[ die ].number = number;

		setAttributes( {
			dice: newDice,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Dice Roller Options', 'dice-roller' ) }
					initialOpen={ true }
				>
					<PanelRow className="dice-settings">
						{ Object.entries( dice ).map( ( die ) => {
							const key = die[ 0 ];
							const attrs = die[ 1 ];

							return (
								<DiceInput
									label={ attrs.label }
									die={ key }
									number={ attrs.number }
									onChangeDice={ onChangeDice }
									key={ key }
								/>
							);
						} ) }
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				{ 0 === selectedDice.length ? (
					<p>Choose some dice to roll!</p>
				) : (
					selectedDice
				) }
			</div>
		</>
	);
};

export default Edit;
