/**
 * Define dice attribute.
 */
import { __ } from '@wordpress/i18n';

const diceAttr = {
	type: 'object',
	default: {
		d100: {
			label: __( 'D100', 'dice-roller' ),
			number: 0,
		},
		d20: {
			label: __( 'D20', 'dice-roller' ),
			number: 0,
		},
		d12: {
			label: __( 'D12', 'dice-roller' ),
			number: 0,
		},
		d10: {
			label: __( 'D10', 'dice-roller' ),
			number: 0,
		},
		d8: {
			label: __( 'D8', 'dice-roller' ),
			number: 0,
		},
		d6: {
			label: __( 'D6', 'dice-roller' ),
			number: 0,
		},
		d4: {
			label: __( 'D4', 'dice-roller' ),
			number: 0,
		},
		d2: {
			label: __( 'D2', 'dice-roller' ),
			number: 0,
		},
	},
};

export default diceAttr;
