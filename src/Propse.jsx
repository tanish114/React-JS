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

            <Child img='vite.svg' h3="imag2" price="400"/>
            <Child img='slider.png' h3="imag3" price="700" />
        

        </div>
    )
}

export default App