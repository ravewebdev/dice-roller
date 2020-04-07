/**
 * REGISTER: Dice Roller Block.
 */
import edit from './edit';
import save from './save';
import icons from './icons';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'rave/dice-roller', {
	title: __( 'Dice Roller', 'dice-roller' ),
	icon: icons.d20,
	category: 'widgets',
	keywords: [
		__( 'dice roller', 'dice-roller' ),
	],
	attributes: {
		number: {
			type: 'number',
			default: '1',
		},
		die: {
			type: 'string',
			default: 'd20',
		},
	},
	supports: {
		align: [ 'left', 'center', 'right', 'wide', 'full', ],
	},
	edit,
	save,
} );
