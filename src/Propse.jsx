import Child from "./Child"

let App=()=>{

    // let newname="tanish singh parihar"

    let myinfo={
        name:"tanish",
        age:26,
        city:"bhopal"

    }
    return(
        <div>
            <h1>this is propse</h1>
            {/* <Child myname="tanish" age="25"/> */}


            {/* <Child myname={newname} age="25"/> */}

            <Child mydata={myinfo}/>


        </div>
    )
}

export default App