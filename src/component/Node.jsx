import React, {useState} from "react";

function Node(props){

    const [expand, setExpand] = useState(false);
    function changeExpand(){
        if(props.data[keys[0]] === "Language"){
            props.originalExpand(false);
        }else{
            setExpand(!expand);
        }

    }

    const keys = Object.keys(props.data);

    return (
        <div className="node">
            <button onClick={changeExpand}>{props.data[keys[1]]}</button>
            {expand ? <div className="child">
            {props.data[keys[2]].map((datum, index) => {
                return (<Node key={index} data = {datum} originalExpand = {props.originalExpand ? props.originalExpand : setExpand}/>)
            })}
            </div>: null}
        </div>
    );
}

export default Node;