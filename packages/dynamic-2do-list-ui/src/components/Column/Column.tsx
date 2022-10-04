import React, { FC } from 'react';
import classes from './column.module.css'

interface ColumnProps {
    children: React.ReactNode,
    columnTitle: string
}
const Column: FC<ColumnProps> = ({children, columnTitle}) => {
    return (
        <div className={classes.column}>
            <div className={classes.columnHeader}>
                <h1 className={classes.columnTitle}>{columnTitle}</h1>
            </div>
            <div className={classes.columnBody}>
                {children}
            </div>
        </div>
    );
};

export default Column;
