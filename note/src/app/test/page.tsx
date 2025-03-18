'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTitle('');
    setDescription('');
  };

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function saveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    closePopup();
  }

  return (
    <>
      {isPopupOpen && (
        <div className="popup-box">
          <div className="popup">
            <div className="content">
              <header>
                <p>Add New Note</p>
                <i className="uil uil-times" onClick={closePopup}></i>
              </header>
              <form onSubmit={saveNote}>
                <div className="row title">
                  <label>Title</label>
                  <input
                    type="text"
                    spellCheck="false"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="row description">
                  <label>Description</label>
                  <textarea
                    spellCheck="false"
                    value={description}
                    onChange={handleDescriptionChange}
                  ></textarea>
                </div>
                <button>Save Note</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="wrapper">
        <li className="add-box" onClick={openPopup}>
          <div className="icon">
            <i className="uil uil-plus"></i>
          </div>
          <p>Add New Note</p>
        </li>
      </div>
    </>
  );
}

export default App;