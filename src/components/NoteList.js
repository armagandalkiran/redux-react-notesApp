import Note from "./Note";
import { useSelector } from "react-redux";

const NoteList = () => {
  const items = useSelector((state) => state.notes.items);
  let filtered = useSelector ((state) => state.notes.filtered);
  const filterText = useSelector ((state) => state.notes.filterText);

  if(!filterText){
    filtered = items;
  }

  return (
    <div className="note-wrapper">
        <div className="note-list--container">
        {(filtered.length > 0 || filterText.length > 0 ? filtered : items).map((item, index) => {
            return (
            <Note key={index} title={item.title} note={item.note} color={item.color} />
            )
        })}
        </div>
    </div>
  );
};

export default NoteList;
