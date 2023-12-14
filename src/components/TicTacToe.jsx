import Board from "./Board";
import { useState } from "react";

const PLAYER_X = "X"
const PLAYER_O = "O"

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X)
    
    const handleTileClick = (index) =>{
       const newTiles = [...tiles];
       newTiles[index] = playerTurn;
       setTiles(newTiles);
       playerTurn === PLAYER_X ? setPlayerTurn(PLAYER_O) : setPlayerTurn(PLAYER_X)
    }
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board tiles={tiles} onTileClick={handleTileClick}></Board>
        </div>
    );
}

export default TicTacToe;