import { connect } from 'react-redux';
import { HomeComponent } from './components/home';
import { getAllNotes, addNote, deleteNote } from '../home/actions/notes.actions';

const mapStateToProps = (state) => {
    return {
        notes: state.notesReducer.notes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotes()),
        addNote: (noteValue: string) => dispatch(addNote(noteValue)),
        deleteNote: (noteIndex: number) => dispatch(deleteNote(noteIndex))
};
};

export const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(HomeComponent);