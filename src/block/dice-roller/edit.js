/**
 * EDIT: Dice Roller Block.
 */
import { RadioControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import icons from './icons';

const Edit = ( props ) => {
	const {
		attributes: {
			number,
			die,
		},
		className,
		setAttributes,
        isSelected,
	} = props;

	const setDieOption = ( label, value ) => {
		return {
			label: (
				<>
					<span className="option-label">{ label }</span>
					<div className={ `option-icon icon-${value}` }>
						{ icons[ value ] }
					</div>
				</>
			),
			value
		}
	};

	return (
		<div className={ className }>
			<TextControl
				label={ __( 'Number of Dice', 'dice-roller' ) }
				type="number"
				value={ number }
				className="number-setting"
				onChange={ ( number ) => {
					setAttributes( { number } )
				} }
			/>
			<RadioControl
				label={ __( 'Type of Die', 'dice-roller' ) }
				selected={ die }
				className="die-setting"
				options={ [
					setDieOption( __( 'D100', 'dice-roller' ), 'd100' ),
					setDieOption( __( 'D20', 'dice-roller' ), 'd20' ),
					setDieOption( __( 'D12', 'dice-roller' ), 'd12' ),
					setDieOption( __( 'D10', 'dice-roller' ), 'd10' ),
					setDieOption( __( 'D8', 'dice-roller' ), 'd8' ),
					setDieOption( __( 'D6', 'dice-roller' ), 'd6' ),
					setDieOption( __( 'D4', 'dice-roller' ), 'd4' ),
					setDieOption( __( 'D2', 'dice-roller' ), 'd2' ),
				] }
				onChange={ ( die ) => {
					setAttributes( { die } )
				} }
			/>
		</div>
	);
};

export default Edit;
