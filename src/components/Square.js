

function Square(props)
{
    
    return(<div className="button" onClick={props.onSquareClick}>{props.value}</div>)
}

export default Square;