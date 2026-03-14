
const HistoryList = () => {
    
    const history = JSON.parse(localStorage.getItem('history')) || []
    console.log(history)
    return (
        <>
        <h2>Historial de temperaturas</h2>
        <ul style={{ listStyleType: 'none', overflowY: 'auto', maxHeight: '200px'   }}   >
            {history.map((entry, index) => ( 
                <li key={index}>{entry}</li>
            ))}
        </ul>

        </>
    )
}
export default HistoryList

