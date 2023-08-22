function INPUT({label,value,onChange}){
    return(
        <div>
            <label><b>{label}</b></label>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    )
}

export default INPUT;