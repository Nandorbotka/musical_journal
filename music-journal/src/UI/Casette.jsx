import React from "react";
import classes from "./casette.module.css";

const Casette = () => {
    return (
        // <div className={classes.fullCasette}>
        <div className={classes.casetteBody}>
            <div className={classes.dots}></div>
            <div className={classes.dots}></div>
            <div className={classes.dots}></div>
            <div className={classes.dots}></div>

            <div className={classes.label}>
                <div className={classes.labelDescp}>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.player}>
                    <div className={classes.tape}>
                        <div className={classes.circle} id="circle1">
                            <div className={classes.teeth}></div>
                            <div className={classes.teeth}></div>
                            <div className={classes.teeth}></div>
                            <div className={classes.teeth}></div>
                        </div>
                        <div className={classes.visor}>
                            <div
                                className={classes.innerCircle}
                                id="inner-circle"
                            ></div>
                            <div
                                className={classes.innerCircle}
                                id="inner-circle2"
                            ></div>
                        </div>
                        <div className={classes.circle} id="circle2">
                            <div className={classes.teeth}></div>
                            <div className={classes.teeth}></div>
                            <div className={classes.teeth}></div>
                            <div className={classes.teeth}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.labelColor}></div>
            </div>
        </div>
        // </div>
    );
};

export default Casette;
