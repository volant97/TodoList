import React from "react";

function Header(props) {
  const { title, titleChangeHandler, content, contentChangeHandler, submitClickHandler } = props;

  return (
    <>
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
    </>
  )
}

export default Header;