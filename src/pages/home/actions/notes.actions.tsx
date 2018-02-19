import { actionEnums } from '../../../common/actionEnums';
import axios from 'axios';

const CLIENT_ROOT_URL = 'http://localhost:3000/#/';

export const getAllNotes = () => {
    return (dispatch ) => {
        dispatch({
            type: actionEnums.GET_ALL_NOTES_REQUEST
        });
        axios.get('/notes')
            .then(response => {
                dispatch({ type: actionEnums.GET_ALL_NOTES_SUCCEED });
            })
            .catch((error) => {
                /* tslint:disable */
                console.log('aaaa');
                dispatch({ type: actionEnums.GET_ALL_NOTES_FAILURE });
                window.location.href = CLIENT_ROOT_URL + 'home';
            });
    };
};

export const addNote = (noteValue: string) => {
    return (dispatch ) => {
        dispatch({
            type: actionEnums.ADD_NOTE_REQUEST
        });
        axios.get('/add')
            .then(response => {
                dispatch({
                    type: actionEnums.ADD_NOTE_SUCCEED,
                    payload: noteValue
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionEnums.ADD_NOTE_FAILURE,
                    payload: noteValue
                });
            });
    };
};

export const deleteNote = (noteIndex: number) => {
    return (dispatch ) => {
        dispatch({
            type: actionEnums.DELETE_NOTE_REQUEST
        });
        axios.get('/delete')
            .then(response => {
                dispatch({
                    type: actionEnums.DELETE_NOTE_SUCCEED,
                    payload: noteIndex
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionEnums.DELETE_NOTE_FAILURE,
                    payload: noteIndex
                });
            });
    };
};