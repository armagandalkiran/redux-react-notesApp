import {useSelector, useDispatch} from "react-redux";
import {setActiveColor} from "../redux/notes/notesSlice";
import {addNotes} from "../redux/notes/notesSlice";

const NoteFormFooter = ({text, setText}) => {

  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.notes.activeColor);

  const handleClick = () => {
    dispatch(addNotes({note:text, color:activeColor}));
    setText("");
  };

  return (
    <div className="note-form-footer--container">
      <ul>
        <a href="#/" onClick={()=>dispatch(setActiveColor("pink"))}>
          <li className={`color-pink ${activeColor === "pink" && "selected-color"}`}></li>
        </a>
        <a href="#/" onClick={()=>dispatch(setActiveColor("purple"))}>
          <li className={`color-purple ${activeColor === "purple" && "selected-color"}`}></li>
        </a>
        <a href="#/" onClick={()=>dispatch(setActiveColor("yellow"))}>
          <li className={`color-yellow ${activeColor === "yellow" && "selected-color"}`}></li>
        </a>
        <a href="#/" onClick={()=>dispatch(setActiveColor("blue"))}>
          <li className={`color-blue ${activeColor === "blue" && "selected-color"}`}></li>
        </a>
        <a href="#/" onClick={()=>dispatch(setActiveColor("green"))}>
          <li className={`color-green ${activeColor === "green" && "selected-color"}`}></li>
        </a>
      </ul>
      <div>
        <button onClick={handleClick} className="button--submit">ADD</button>
        <span style={{ marginLeft: 30 }}>{text.length}/255</span>
      </div>
    </div>
  );
};

export default NoteFormFooter;
