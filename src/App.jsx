import './App.css';
import React from "react";
import { useState } from "react";
import Todo from "./Todo"

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);

  const submitClickHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    }

    if (title === "" || content === "") {
      alert("제목 및 내용을 입력해 주세요.");
    } else {
      setTodo([...todo, newTodo]);
    }

    setTitle("");
    setContent("");
  };

  const titleChangeHandler = (e => {
    setTitle(e.target.value)
  });

  const contentChangeHandler = (e => {
    setContent(e.target.value)
  });

  // working 삭제 기능
  const workingDeleteHandler = (id => {
    setTodo(todo.filter(item => item.id !== id));
  });

  // working 완료 기능
  const workingDoneHandler = (did => {
    const newDoneTodo = {
      id: did.id,
      title: did.title,
      constent: did.content,
      isDone: true,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter(item => item.id !== did.id));
  });

  // Done 삭제 기능
  const doneDeleteHandler = (id => {
    setDoneTodo(doneTodo.filter(did => did.id !== id));
  });

  // Done 취소 기능
  const doneCancelHandler = (cid => {
    const newTodo = {
      id: cid.id,
      title: cid.title,
      content: cid.content,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter(did => cid.id !== did.id));
  })

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
    <div className='outline'>
      <div className='app_box'>

        <header>
          <div className='header_top'>
            <h1>My Todo List</h1>
            <p>React</p>
          </div>

          <form className='header_box'>
            <div className='header_input_box_outline'>
              <div className='header_input_box title'>
                <p>제목</p>
                <input
                  type='text'
                  value={title}
                  onChange={titleChangeHandler}
                />
              </div>
              <div className='header_input_box content'>
                <p>내용</p>
                <input
                  type='text'
                  value={content}
                  onChange={contentChangeHandler}
                />
              </div>
            </div>
            <div>
              <button className='add_btn' onClick={submitClickHandler}>추가하기</button>
            </div>
          </form>
        </header>

        <main>
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
        </main>
      </div>
    </div>
  )
}

export default App;
