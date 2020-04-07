/**
 * EDIT: Dice Roller Block.
 */
import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import icons from './icons';

const Edit = ( props ) => {
	const {
		attributes: {
			die,
		},
		className,
		setAttributes,
        isSelected,
	} = props;

	// Update field content on change.
	const onChangeDie = ( die ) => {
		setAttributes( { die } );
	};

	const setDieOption = ( label, value ) => {
		return {
			label: (
				<>
					<span className="icon-label">{ label }</span>
					<div className={ `icon-${value}` }>
						{ icons[ value ] }
					</div>
				</>
			),
			value
		}
	};

	return (
		<div className={ className }>
			<RadioControl
				label={ __( 'Die', 'dice-roller' ) }
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
				onChange={ onChangeDie }
			/>
		</div>
	);
};

export default Edit;
