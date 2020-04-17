/**
 * EDIT: Dice Roller Block.
 */
import { PanelBody, PanelRow } from '@wordpress/components';
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
							const { label, number } = die[ 1 ];

							return (
								<>
									<DiceInput
										label={ label }
										die={ key }
										number={ number }
										onChangeDice={ onChangeDice }
										key={ key }
									/>
								</>
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
