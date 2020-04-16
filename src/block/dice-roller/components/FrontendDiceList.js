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

	return (
		<div className={ className }>
			<Dice
				dice={ dice }
				emptyText={ null }
				live={ true }
			/>
			<button type="button" className="roll-dice">
				{ __( 'Roll these dice!', 'dice-roller' ) }
			</button>
		</div>
	);
};

export default FrontendDiceList;
