import React, { FC } from 'react';
import classes from './index.module.css';
import Column from "../Column/Column";
import { TaskItem } from "../TaskItem";
import BoardWallpaper from "../../assets/images/board-wallpaper.jpeg";

interface OwnProps {
    children: React.ReactNode
}


const Board: FC<OwnProps> = ({children}) => {
  return (
      <div className={classes.board} style={{backgroundImage: `url(${BoardWallpaper})`  }}>
          {children}
      </div>
  );
};

export default Board;
