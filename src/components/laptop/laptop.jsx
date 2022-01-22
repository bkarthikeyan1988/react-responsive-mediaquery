// laptop.component.jsx
import React from 'react'
import classNames from "classnames/bind";
import * as styles from './laptop.css'
const cx = classNames.bind(styles);

export const Laptop = () => {
    return (
        <div className={cx('laptop')}>
            <p>Whoops! I'm in laptop mode.</p>
            <p>But if you see anything below me, i am now in Big Screen mode</p>
        </div>
    )
}