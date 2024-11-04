import { useState } from "react";
import "./Game.css"
const Game = () => {

    const [player] = useState("Player 1");
    const [val, setVal] = useState(Array(9).fill(""))
    const [data, setData] = useState("X")

    const func = (index) => {
        console.log("index", index)
        let temp = [...val];
        if (temp[index] === "") {
            temp[index] = "X"
            setVal(temp);
        } else if( temp[index]==="X"){
            temp[index] = "O"
            setVal(temp);
        } else{
            temp[index] = "X"
            setVal(temp);
        }

    }
    return (
        <div className="container">
            <span>{player} is playing</span>
            <div className="grid">
                {
                    val.map((item, index) => {
                        return (
                            <span key={index}>
                                <button className="box" onClick={() => func(index)}>{item}</button>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Game;