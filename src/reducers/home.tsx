import { actionEnums } from '../common/actionEnums';

export interface HomeState {
    notes: string[];
}

const INITIAL_STATE: HomeState = { notes: [] };

const deleteNote = (notes, index) => {
    const notesCloned = JSON.parse(JSON.stringify(notes));
    notesCloned.splice(index, 1);
    return notesCloned;
};

export const notesReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionEnums.GET_ALL_NOTES_REQUEST:
            return state;
        case actionEnums.GET_ALL_NOTES_SUCCEED:
            return state;
        case actionEnums.GET_ALL_NOTES_FAILURE:
            return state;
        case actionEnums.ADD_NOTE_REQUEST:
            return state;
        case actionEnums.ADD_NOTE_SUCCEED:
            return state;
        case actionEnums.ADD_NOTE_FAILURE:
            return { ...state, notes: [...state.notes, action.payload] };
        case actionEnums.DELETE_NOTE_REQUEST:
            return state;
        case actionEnums.DELETE_NOTE_SUCCEED:
            return state;
        case actionEnums.DELETE_NOTE_FAILURE:
            const updatedNotes = deleteNote(state.notes, action.payload);
            return { ...state, notes: updatedNotes };
        default:
            return state;
    }
};
