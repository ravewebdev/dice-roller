/**
 * SAVE: Dice Roller Block
 */
import Dice from './components/Dice';

/**
 * Handle save functionality in the admin.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props  Block props.
 * @return {?ReactElement} Block save JSX.
 */
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
		</div>
	);
};

export default Save;
