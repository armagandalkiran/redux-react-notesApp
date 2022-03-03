import NoteFormFooter from './NoteFormFooter';
import "../App.css";
import {useState} from "react";
import FilterForm from "./FilterForm";

const NoteForm = () => {

  const [text, setText] = useState("");

  return (
    <>
    <FilterForm/>
      <div className="note-form--container">
          <textarea onChange={(e)=>setText(e.target.value)} value={text} maxLength="255" className="textarea-reset" placeholder="Enter your note here .."/>
          <NoteFormFooter text={text} setText={setText}/>
      </div>
    </>
  )
}

export default NoteForm;