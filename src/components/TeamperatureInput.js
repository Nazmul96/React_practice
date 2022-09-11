const ScaleName={
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default function TemperatureInput ({temperature,scale,onTemperatureChange}){

        return(
            <fieldset>
                <legend>Enter Teamperature in {ScaleName[scale]}:</legend>
                    <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)}/>
            </fieldset>
          
        );

}