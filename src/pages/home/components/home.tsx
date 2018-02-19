import * as React from 'react';
import { NotesListComponent } from './notesList';

interface Props {
    notes: string[];
    getAllNotes: () => void;
    addNote: (noteValue: string) => void;
    deleteNote: (noteIndex: number) => void;
}

export class HomeComponent extends React.Component<Props, {}> {
    componentDidMount() {
        this.props.getAllNotes();
    }

    render() {
        return (
            <div>
                {this.props.notes.length === 0 && 'No notes found'}
                <NotesListComponent addNote={this.props.addNote}/>
                {this.props.notes.map((item, index) => (
                    <div>{item} <button onClick={() => this.props.deleteNote(index)}>X</button></div>
                ))}
            </div>
        );
    }
}