/**
 * SAVE: Dice Roller Block.
 */
import { __ } from '@wordpress/i18n';

import Dice from './components/Dice';

const Save = ( props ) => {
	const {
		attributes: {
			dice,
		},
		className,
	} = props;

	return (
		<div className={ className }>
			<Dice
				dice={ dice }
				emptyText={ null }
			/>
			<button type="button" className="roll-dice">
				{ __( 'Roll these dice!', 'dice-roller' ) }
			</button>
		</div>
	);
};

export default Save;
