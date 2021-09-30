import { render } from '@testing-library/react';
import React from 'react';

export class ThemeChange {
    constructor () {
        this.color = 'white';
        this.force = new Event('force',{bubbles:false});
        this.gigi = new Event('gigi',{bubbles:false});

        this.colorList = [
            {
                color: 'red',
                classColor:'danger'
            },
            {
                color: 'blue',
                classColor:'primary'
            },
            {
                color: 'green',
                classColor:'success'
            },
            {
                color: 'yellow',
                classColor:'warning'
            },
            {
                color: '?????',
                classColor:'dark'
            }
        ]
    }

    gigiDag = () => {
        
        document.dispatchEvent(this.gigi);
        setInterval(()=>{
            this.color = this.colorList[Math.floor(Math.random()*3)].classColor;
            document.dispatchEvent(this.force);
        },500)

    }

    themeUpdate (color) {
        let nextColor = this.colorList[Math.floor(Math.random()*3)].classColor;

        this.color = (this.color === color || this.color === nextColor) 
        ? 'white'
        : color === 'dark' ? this.gigiDag() : color
       
        document.dispatchEvent(this.force);
    }
}

export default React.createContext(new ThemeChange());