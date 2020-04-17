/**
 * EDIT: Dice Roller Block.
 */
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import DiceInput from './components/DiceInput';
import Dice from './components/Dice';

const Edit = ( props ) => {
	const {
		attributes: {
			dice,
		},
		className,
		setAttributes,
	} = props;

	// Update number of current die.
	const onChangeDice = ( die, number ) => {
		const newDice = { ...dice };
		number = 0 > number ? 0 : number;
		newDice[ die ].number = number;

		setAttributes( {
			dice: newDice,
		} );
	};

	// Update multi-die fn for current die.
	const onChangeMultiDieFn = ( die, multiDieFn ) => {
		const newDice = { ...dice };
		multiDieFn = '' === multiDieFn ? null : multiDieFn;
		newDice[ die ].multiDieFn = multiDieFn;

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
							const { label, number, multiDieFn } = die[ 1 ];

							return (
								<div className="die-options" key={ key }>
									<DiceInput
										label={ label }
										die={ key }
										number={ number }
										onChangeDice={ onChangeDice }
										key={ key }
									/>
									{ 1 < number && (
										<SelectControl
											label={ __( 'Multi-die handling', 'dice-roller' ) }
											value={ multiDieFn }
											options={ [
												{ value: '', label: __( '-- Select --', 'dice-roller' ) },
												{ value: 'sum', label: __( 'Add all rolls together', 'dice-roller' ) },
												{ value: 'take-highest', label: __( 'Keep the highest roll', 'dice-roller' ) },
												{ value: 'take-lowest', label: __( 'Keep the lowest roll', 'dice-roller' ) },
												{ value: 'drop-highest', label: __( 'Drop the highest roll', 'dice-roller' ) },
												{ value: 'drop-lowest', label: __( 'Drop the lowest roll', 'dice-roller' ) },
											] }
											onChange={ ( newMultiDieFn ) => {
												onChangeMultiDieFn( key, newMultiDieFn );
											} }
										/>
									) }
								</div>
							);
						} ) }
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				<Dice
					dice={ dice }
					emptyText={ __( 'Choose some dice to roll!', 'dice-roller' ) }
				/>
			</div>
		</>
	);
};

export default Edit;
