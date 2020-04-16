/**
 * Display frontend dice list.
 */
import { __ } from '@wordpress/i18n';
import { useState } from 'react';

import Dice from './Dice';

const FrontendDiceList = ( props ) => {
	const {
		dice,
		className,
	} = props;

	const [ isRolling, setIsRolling ] = useState( false );

	return (
		<div className={ className }>
			<Dice
				dice={ dice }
				emptyText={ null }
				live={ true }
			/>
			<button
				type="button"
				className="roll-dice"
				disabled={ isRolling }
			>
				{ isRolling ? __( 'Rolling...', 'dice-roller' ) : __( 'Roll these dice!', 'dice-roller' ) }
			</button>
		</div>
	);
};

export default FrontendDiceList;
