import { memo } from 'react';


import resets from '../_resets.module.css';
import classes from './PatternLowerLeft.module.css';
import { PatternLowerLeftIcon } from './PatternLowerLeftIcon.jsx';


/* @figmaId 48:203 */
export const PatternLowerLeft = memo(function PatternLowerLeft(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <>
        <PatternLowerLeftIcon className={classes.icon} />
      </>
    </div>
  );
});
