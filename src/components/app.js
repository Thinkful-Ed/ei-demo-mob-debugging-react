import React from 'react';

const CUP_IN_ML = 237;

export default class App {
    constructor(props) {
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
                    onChange={this.setCups()}
                />
                <label htmlFor="ml">Ml:</label>
                <Input id="ml" value={this.state.ml} onChange={this.setMl()} />
            </form>
        );
    }
}
