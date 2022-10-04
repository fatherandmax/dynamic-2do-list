import React, { FC } from "react";
import classes from "./task-item.module.css";

interface TaskItemProps {
    title: string;
}

export const TaskItem: FC<TaskItemProps>  = ({ title }) =>{
    return (
        <div className={classes.taskItem} draggable>
            {title}
        </div>
    )
}
