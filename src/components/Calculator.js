import React from 'react';
import TeamperatureInput from './TeamperatureInput';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';

export default class Calculator extends React.Component{

    state = { temperature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render(){

        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TeamperatureInput 
                  scale="c"
                  temperature={celsius}
                  onTemperatureChange={this.handleChange}
                />
                <TeamperatureInput 
                   scale="f"
                   temperature={fahrenheit}
                   onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }

}