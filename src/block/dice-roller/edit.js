/**
 * EDIT: Dice Roller Block.
 */
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import DiceInput from './components/DiceInput';

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
					<PanelRow>
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
				{ console.log( 'dice',  dice ) }
			</div>
		</>
	);
};

export default Edit;
