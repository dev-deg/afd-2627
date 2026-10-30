import React from "react";
import type { FilterButtonsProps } from "../../types/todo";
import styles from './FilterButtons.module.css';

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, onFilterChange }) => {
    return (
        <div className={styles.filterButtons}>
            <button className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`} onClick={() => onFilterChange('all')}>
                All
            </button>
            <button className={`${styles.filterButton} ${activeFilter === 'active' ? styles.active : ''}`} onClick={() => onFilterChange('active')}>
                Active
            </button>
            <button className={`${styles.filterButton} ${activeFilter === 'completed' ? styles.active : ''}`} onClick={() => onFilterChange('completed')}>
                Completed
            </button>
        </div>
    );
};

export default FilterButtons;