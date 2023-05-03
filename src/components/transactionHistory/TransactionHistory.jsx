import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './TransactionHistory.module.css';

const TransactionHistory = ({
    items = [{
        type: 'type undefined',
        amount: 'amount undefined',
        currency: 'currency undefined',
    }]
}) => {
    return (<table className={clsx(css['transaction-history'])}>
        <thead className={clsx(css.thead)}>
            <tr className={clsx(css['tr-head'])}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={clsx(css.tbody)}>
            {items.map(({ id, type, amount, currency }) => {
                return <tr key={id} className={clsx(css['tr-body'])}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                }
            )}
        </tbody>
    </table>);
};

// Added a cheks by the PropTypes for types of the props of the arrow function "TransactionHistory".
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),).isRequired,
};

export default TransactionHistory;