import React from 'react';
import ThemeContext,{ ThemeChange } from '../../contexts/ThemeContext';

class Button extends React.Component {
    static contextType = ThemeContext;

    render () {
        const classes = `button btn-${this.props.classColor} btn m-3`;

        return (
            <div className={classes} onClick={()=>this.context.themeUpdate(this.props.classColor)}>{this.props.color}</div>
        )
    }
}

export default Button;