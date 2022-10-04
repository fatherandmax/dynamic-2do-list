import React from 'react'
import classes from './layout.module.css'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => (
        <div className={classes.layout}>{children}</div>
)
