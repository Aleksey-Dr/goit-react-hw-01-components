// Import PropTypes from package 'prop-types'
import PropTypes from 'prop-types';
import clsx from "clsx";
// Import css styles from the Statistics.module.css
import css from './Statistics.module.css'

const Statistics = ({
    // Added default values for props
    // prop "title" is not required
    title,
    stats = [{
        label: 'undefined',
        percentage: 'undefined',
    }],
}) => {
    // Render "title" by condition
    // h2 is not required element
    return <section className={clsx(css.statistics)}>
        {title && <h2 className={clsx(css.title)}>{title}</h2>}

        <ul className={clsx(css['stat-list'])}>
            {stats.map(({ id, label, percentage, }) => {
                return <li key={id} className={clsx(css.item)}>
                    <span className={clsx(css.label)}>{label}</span>
                    <span className={clsx(css.percentage)}>{percentage}%</span>
                </li>
            })}
        </ul>
    </section>;
};

// Added a cheks by the PropTypes for types of the props of the arrow function "Statistics".
Statistics.propTypes = {
    // "title" is string, is not required
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),).isRequired,
};

export default Statistics;