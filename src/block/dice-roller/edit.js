/**
 * EDIT: Dice Roller Block.
 */
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import Dice from './components/Dice';
import DieOptions from './components/DieOptions';

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
						{ Object.entries( dice ).map( ( die ) => (
							<DieOptions
								die={ die }
								key={ die[ 0 ] }
								onChangeDice={ onChangeDice }
								onChangeMultiDieFn={ onChangeMultiDieFn }
							/>
						) ) }
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
