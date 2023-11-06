import './App.css';
import React from "react";
import { useState } from "react";
import Header from './Component/Header';
import Main from './Component/MainLogic';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);

  // 추가하기 버튼 클릭
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

  // title input 값
  const titleChangeHandler = e => {
    setTitle(e.target.value)
  };

  // content input 값
  const contentChangeHandler = e => {
    setContent(e.target.value)
  };

  // working 삭제
  const workingDeleteHandler = (id => {
    setTodo(todo.filter(item => item.id !== id));
  });

  // working 완료
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

  // Done 삭제
  const doneDeleteHandler = (id => {
    setDoneTodo(doneTodo.filter(did => did.id !== id));
  });

  // Done 취소
  const doneCancelHandler = (cid => {
    const newTodo = {
      id: cid.id,
      title: cid.title,
      content: cid.content,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter(did => cid.id !== did.id));
  })



  // header
  const header = <Header
    key={"header"}
    title={title}
    titleChangeHandler={titleChangeHandler}
    content={content}
    contentChangeHandler={contentChangeHandler}
    submitClickHandler={submitClickHandler}
  />

  // main
  const main = <Main
    key={"main"}
    todo={todo}
    doneTodo={doneTodo}
    workingDeleteHandler={workingDeleteHandler}
    workingDoneHandler={workingDoneHandler}
    doneDeleteHandler={doneDeleteHandler}
    doneCancelHandler={doneCancelHandler}
  />



  return (
    <div className='outline'>
      <div className='app_box'>
        <header>
          {header}
        </header>
        <main>
          {main}
        </main>
      </div>
    </div>
  )
}

export default App;
