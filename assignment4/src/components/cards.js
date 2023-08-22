function cards(props){
    return(
        <div className="card">
            <center>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Institute: {props.institute}</p></center>
        </div>
    )
}

export default cards;