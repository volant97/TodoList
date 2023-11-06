import React from "react";
import Todo from "./Todo"

function Main(props) {
  const { todo, doneTodo, workingDeleteHandler, workingDoneHandler, doneDeleteHandler, doneCancelHandler } = props;

  // working 카드 리스트
  const workingCardList = todo.map(item => {
    return (
      <Todo
        key={item.id}
        title={item.title}
        content={item.content}
        todo={item}
        isDone={item.isDone}
        firstHandler={workingDeleteHandler}
        secondHandler={workingDoneHandler}
        firstBtn="삭제하기"
        secondBtn="완료"
      />
    )
  })

  // Done 카드 리스트
  const doneCardList = doneTodo.map(item => {
    return (
      <Todo
        key={item.id}
        title={item.title}
        content={item.constent}
        todo={item}
        isDone={item.isDone}
        firstHandler={doneDeleteHandler}
        secondHandler={doneCancelHandler}
        firstBtn="삭제하기"
        secondBtn="취소"
      />
    )
  })

  return (
    <>
      <div>
        <div className='working'>
          <h2>Working.. 🔥</h2>
          <div className='working_card_box'>
            {workingCardList}
          </div>
        </div>
        <div className='done'>
          <h2>Done..! 🎉</h2>
          <div className='done_card_box'>
            {doneCardList}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main; 