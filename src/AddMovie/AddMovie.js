import React, { useState } from 'react';
import Modal from 'react-modal';

import Rate from '../Rate';

import './AddMovie.css';

Modal.setAppElement('#root');

const AddMovie = ({handleAdd}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
 

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

const add=()=>{
  handleAdd({id:Date.now(),name,image,rating,date,type,description})
  setName("")
  setImage("")
  setRating(0)
  setDate("")
  setType("")

  setDescription("")


}
  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
          
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search">
              <Rate rating={rating} setRatesSearch={setRating} />
            </div>
            <input
               value={rating} 
              onChange={e=>setRating(e.target.value)}             
               type="number"
              name="rating"
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
            />
            <label>Movie Release Date</label>
            <input
             value={date} 
             onChange={e=>setDate(e.target.value)}            
              type="number"
              name="date"
     
              required
           
            />
            <label>Movie Image</label>
            <input
              value={image} 
              onChange={e=>setImage(e.target.value)}            
               type="url"
              name="image"
           
              required
           
            />
            <label>Movie Type</label>
            <input
              value={type}
               onChange={e=>setType(e.target.value)}            
               type="text"
              name="type"
              
              required
              
            />
            <label>Movie Summary</label>
            <textarea
            value={description}
            onChange={e=>setDescription(e.target.value)}
              type="text"
              name="description"
        
              required
          
            />
          </form>
          <button onClick={add} className="Modal-btn" >
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
