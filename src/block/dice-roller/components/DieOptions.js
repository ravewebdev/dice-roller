/**
 * Display selection die options.
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import DiceInput from './DiceInput';

const DieOptions = ( props ) => {
	const {
		die: [ key, { label, number, multiDieFn } ],
		onChangeDice,
		onChangeMultiDieFn,
	} = props;

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
};

export default DieOptions;
