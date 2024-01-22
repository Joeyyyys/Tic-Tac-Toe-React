import GameState from "./GameStates"

function GameOver({ gameState }) {
    switch(gameState){
        case GameState.inProgress:
            return <></>
        case GameState.playerOWins:
            return <div className="game-over"> O WINS</div>
        case GameState.playerXWins:
            return <div className="game-over"> X WINS</div>
        case GameState.draw:
            return <div className="game-over">Draw</div>
        default:
            return <></>
    }
}

export default GameOver