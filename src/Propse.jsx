import Child from "./Child"

let App=()=>{

    let newname="tanish singh parihar"
    return(
        <div>
            <h1>this is propse</h1>
            {/* <Child myname="tanish" age="25"/> */}
            <Child myname={newname} age="25"/>
        </div>
    )
}

export default App