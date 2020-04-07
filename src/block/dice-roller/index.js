/**
 * REGISTER: Dice Roller Block.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'rave/dice-roller', {
	title: __( 'Dice Roller', 'dice-roller' ),
	icon: 'admin-generic',
	category: 'widgets',
	keywords: [
		__( 'dice roller', 'dice-roller' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );
