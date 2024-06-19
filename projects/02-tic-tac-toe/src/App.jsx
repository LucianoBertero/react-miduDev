import { useState, useEffect } from "react";
import { Square } from "./components/Square";
import { TURNS } from "./constans";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WInnerModal";
import "./App.css";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) {
      return JSON.parse(boardFromStorage);
    }
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    if (turnFromStorage) {
      return JSON.parse(turnFromStorage);
    }
    return TURNS.X;
  });

  const [winner, setWinner] = useState(null); //null es que no hay ganador, false hay empate

  const updateBoard = (index) => {
    if (board[index] !== null || winner) {
      //si la casilla ya esta ocupada no se puede volver a ocupar
      return;
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn); //Cambiar el turno
    const newBoard = [...board]; //no hay que mutar nunca las props ni los estados, siempre crear algo nuevo y suplantar
    newBoard[index] = turn; //los estados siempre son inmutables
    setBoard(newBoard);

    //Guardar partida

    window.localStorage.setItem("board", JSON.stringify(newBoard));

    window.localStorage.setItem("turn", JSON.stringify(newTurn));

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      //alerta de quien gano
      setWinner(newWinner); //Es asincrono, por eso no se puede poner el alert despues de esta linea
    } //checkear que el juego se acabo
    else if (checkEndGame(newBoard)) {
      setWinner(false); //Empate
    }
  };

  //USE EFFECT -> se ejecuta despues de que se renderiza el componente si no tiene nada

  // useEffect(() => {
  //   //cuando se empieza a renderizar
  //   console.log("renderizando");
  // }, [winner]); //ejecuta cuando cambia el estado de winner

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square> //con el children renderizamos lo que se encuentra adentro del componente
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
