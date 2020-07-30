/**
 * EDIT: Dice Roller Block
 */

import { InspectorControls } from '@wordpress/block-editor';

import Dice from './components/Dice';
import DieOptions from './components/DieOptions';

import './editor.scss';

const {
	i18n: {
		__,
	},
	components: {
		PanelBody,
		PanelRow,
	},
	hooks: {
		applyFilters,
	},
} = wp;

/**
 * Handle edit functionality in the admin.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Block props.
 * @return {ReactElement} Block edit JSX.
 */
const Edit = ( props ) => {
	const {
		attributes: {
			dice,
		},
		className,
		setAttributes,
	} = props;

	/**
	 * Update number of current die.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {string} die    Die number.
	 * @param  {number} number Count of current die.
	 */
	const onChangeDice = ( die, number ) => {
		const newDice = { ...dice };

		number = 0 > number ? 0 : number;
		newDice[ die ].number = number;

		setAttributes( {
			dice: newDice,
		} );
	};

	/**
	 * Update multi-die fn for current die.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {string} die        Die number.
	 * @param  {string} multiDieFn Type of multi-die handling function.
	 */
	const onChangeMultiDieFn = ( die, multiDieFn ) => {
		const newDice = { ...dice };
		multiDieFn = '' === multiDieFn ? null : multiDieFn;
		newDice[ die ].multiDieFn = multiDieFn;

		setAttributes( {
			dice: newDice,
		} );
	};

	/**
	 * Determine whether dice roller settings should be shown.
	 *
	 * @since  NEXT
	 *
	 * @param  {boolean} showSettings Whether dice roller settings should be shown.
	 */
	const showSettings = applyFilters( 'rave.diceRoller.showSettings', true );

	return (
		<>
			{ showSettings && (
				<InspectorControls>
					<PanelBody
						title={ __( 'Dice Roller Options', 'dice-roller' ) }
						initialOpen={ true }
					>
						<PanelRow className="dice-settings">
							{ Object.entries( dice ).map( ( die ) => (
								<DieOptions
									die={ die }
									key={ die[ 0 ] }
									onChangeDice={ onChangeDice }
									onChangeMultiDieFn={ onChangeMultiDieFn }
								/>
							) ) }
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			) }
			<div className={ className }>
				<Dice
					dice={ dice }
					emptyText={ __( 'Choose some dice to roll!', 'dice-roller' ) }
				/>
			</div>
		</>
	);
};

export default Edit;
