import React from "react";

function Todo(props) {
  const { title, content, todo, isDone, firstBtn, secondBtn, firstHandler, secondHandler } = props;

  if (isDone === true) {
    // Done card
    return (
      <div className='card'>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className='card_btn_box'>
        <button className='delete_btn' onClick={() => firstHandler(todo.id)}>{firstBtn}</button>
        <button className='complete_btn' onClick={() => secondHandler(todo)}>{secondBtn}</button>
      </div>
    </div>
    )
  } else {
    // Working card
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className='card_btn_box'>
        <button className='delete_btn' onClick={() => firstHandler(todo.id)}>{firstBtn}</button>
        <button className='complete_btn' onClick={() => secondHandler(todo)}>{secondBtn}</button>
      </div>
    </div>
  )
}
}

export default Todo;