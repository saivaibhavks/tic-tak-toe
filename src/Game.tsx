import { useState } from "react";
import "./Game.css"
const Game = () => {

    const [player, setPlayer] = useState("Player 1");
    const [val, setVal] = useState(Array(9).fill(""))
    const [data, setData] = useState("X")

    const func = (index) => {
        console.log("index", index)
        let temp = [...val];
        if (temp[index] === "") {
            temp[index] = data;
            setVal(temp);
            if (player === "Player 1") {
                setPlayer("Player 2")
            }
            else {
                setPlayer("Player 1")
            }

            if (data === "X") {
                setData("O");
            }
            else {
                setData("X");
            }

        }
    }
    return (
        <div className="container">
            <span>{player} Turn is playimng</span>
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