/**
 * DiceInput Component.
 */
import { TextControl } from '@wordpress/components';

import icons from '../icons';

/**
 * Handle render of dice input.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Component props.
 * @return {ReactElement} Component render JSX.
 */
const DiceInput = ( props ) => {
	const {
		label,
		die,
		number,
		onChangeDice,
	} = props;

	return (
		<label htmlFor={ die } className="die-setting">
			<TextControl
				label={ label }
				type="number"
				value={ number }
				onChange={ ( newNumber ) => {
					onChangeDice( die, parseInt( newNumber, 10 ) );
				} }
			/>
			{ icons[ die ] }
		</label>
	);
};

export default DiceInput;
