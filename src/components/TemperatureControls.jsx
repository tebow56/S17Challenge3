

const TemperatureControls = ({increaseTemperature,resetTemperature, decreaseTemperature})=> {
    return (
        <>
            <button onClick={() => increaseTemperature()}>Aumentar temperatura</button>
            <button onClick={() => decreaseTemperature()}>Disminuir temperatura</button>
            <button onClick={() => resetTemperature()}>Restablecer temperatura</button>
        </> 
    )
}

export default TemperatureControls