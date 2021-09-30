import React from 'react';
import ThemeContext, { ThemeChange } from '../../contexts/ThemeContext';
import Button from '../Button';

class Home extends React.Component {
    static contextType = ThemeContext;
    constructor() {
        super();

        this.state = {
            color: 'white',
            gigi: false
        }
    }

    componentDidMount() {
        document.addEventListener('force', () => {
            const color = this.context.color;

            this.setState({
                color
            })
        })

        document.addEventListener('gigi', () => {
            const gigi = true;

            this.setState({
                gigi
            })
        })
    }

    render() {
        const buttons = this.context.colorList.map((element, index) => <Button key={index} color={element.color} classColor={element.classColor} />);

        return (
            <div className={`bg-${this.state.color} mt-5 min-vh-100`}>
                {buttons}
                {this.state.gigi && 
                    <iframe width="560" height="315"src="https://www.youtube.com/embed/w15oWDh02K4?controls=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }   
            </div>
        )
    }
}

export default Home;