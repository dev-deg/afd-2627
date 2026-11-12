import React from 'react';
import RenderBadge from '../RenderBadge/RenderBadge';
import useRenderCount from '../../hooks/useRenderCount';
import type { DevBarProps } from '../../types/todo';
import styles from './Devbar.module.css'

const DevBar: React.FC<DevBarProps> = ({ onSeed, onReset, onAddTwo }) => {
    const renderCount = useRenderCount();
    return (
        <div className={styles.devBar}>
            <div>
                <small><RenderBadge count={renderCount} /></small>
            </div>
            <div className={styles.buttons}>
                <button className={styles.devButton} onClick={() => onSeed(100)}>100</button>
                <button className={styles.devButton} onClick={() => onSeed(1000)}>1,000</button>
                <button className={styles.devButton} onClick={() => onSeed(5000)}>5,000</button>
                <button className={styles.devButton} onClick={onAddTwo}>Add 2 at once</button>
                <button className={styles.devButton} onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default DevBar;