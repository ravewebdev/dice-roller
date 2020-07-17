/**
 * BLOCK: Dice Roller Block.
 *
 * Register Dice Roller
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import icons from './icons';
import diceAttr from './diceAttr';

/**
 * Register Dice Roller block.
 */
registerBlockType( 'rave/dice-roller', {
	title: __( 'Dice Roller', 'dice-roller' ),
	icon: icons.d20,
	category: 'widgets',
	keywords: [
		__( 'dice roller', 'dice-roller' ),
	],
	attributes: {
		dice: diceAttr,
	},
	supports: {
		align: [ 'left', 'center', 'right', 'wide', 'full' ],
	},
	edit,
	save,
} );
