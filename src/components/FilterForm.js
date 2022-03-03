import {useState, useEffect} from 'react';
import {filterNotes} from "../redux/notes/notesSlice";
import {useDispatch} from "react-redux";

const FilterForm = () => {

  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  //filter problem test later
  useEffect(()=>dispatch(filterNotes(filter)),[filter,dispatch])

  //dispatch used as a dependency only for warning

  return (
    <div className="filter-form--container">
      <input  onChange={ (e)=>{setFilter(e.target.value)}}
      value={filter} placeholder="Search.."/>
    </div>
  )
}

export default FilterForm;

// onChange={({target})=>(()=>{
//   setFilter(target.value);
//   dispatch(filterNotes(filter));
// })()}