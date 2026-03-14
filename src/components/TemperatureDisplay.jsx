


const TemperatureDisplay = ({temperature})=> {
    return (<>
    <div className='temperature-display'>
        <h2>{temperature}º</h2>
        <p>{temperature < 15 ? 'Hace frío' : temperature > 25 ? 'Hace calor' : 'Temperatura agradable'}</p>
    </div>
    </>
)}

export default TemperatureDisplay