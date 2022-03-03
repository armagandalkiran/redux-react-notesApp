import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState:{
        items: [],
        activeColor:"pink",
        filtered: [],
        filterText:"",
    },
    reducers: {
      setActiveColor: (state,action) => {
        state.activeColor = action.payload;
      },
      addNotes: (state,action) => {
        action.payload.title = "note"+(state.items.length + 1)
        state.items.push(action.payload);
        // need to changed for filtering
        if(state.filterText)
        state.items[state.items.length - 1].note.toLowerCase().includes(state.filterText.toLowerCase()) && state.filtered.push(action.payload);
      },
      filterNotes: (state,action) => {
        state.filterText = action.payload;
        if(action.payload) {
          state.filtered = state.items.filter((item) => item.note.toLowerCase().includes(action.payload.toLowerCase()))
        } else {
          state.filtered = state.items;
        }
      },
    },
});

export const {addNotes, setActiveColor, filterNotes} = notesSlice.actions;

export default notesSlice.reducer;