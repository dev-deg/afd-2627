import React from 'react';
import useRenderCount from '../../hooks/useRenderCount';
import type { SearchBoxProps } from '../../types/todo';
import styles from './SearchBox.module.css';
import RenderBadge from '../RenderBadge/RenderBadge';

const SearchBox: React.FC<SearchBoxProps> = ({value, onChange, isStale}) => {
    const renderCount = useRenderCount();
	return (
		<div className={styles.searchRow}>
			<input
				type="text"
				value={value}
                placeholder="Search todos..."
				onChange={(e) => onChange(e.target.value)}
				className={styles.searchInput}
			/>
			{isStale ? <span className={styles.staleFlag}> results catching up...</span> : null}
            <RenderBadge count={renderCount} noisyAfter={1000} />
		</div>
	);
};

export default React.memo(SearchBox);