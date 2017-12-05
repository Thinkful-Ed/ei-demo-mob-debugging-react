import React from 'react';
import Input from './input';

const CUP_IN_ML = 237;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cups: 1,
            ml: CUP_IN_ML
        };
    }

    setCups(cups) {
        this.setState({
            cups,
            ml: cups * CUP_IN_ML
        });
    }

    setMl(ml) {
        this.setState({
            ml,
            cups: ml / CUP_IN_ML
        });
    }

    render() {
        return (
            <form>
                <label htmlFor="cups">Cups:</label>
                <Input
                    id="cups"
                    value={this.state.cups}
                    onChange={cups => this.setCups(cups)}
                />
                <label htmlFor="ml">Ml:</label>
                <Input
                    id="ml"
                    value={this.state.ml}
                    onChange={ml => this.setMl(ml)}
                />
            </form>
        );
    }
}
