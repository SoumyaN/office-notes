import * as React from 'react';

interface Props {
    addNote: (noteValue: string) => void;
}

interface LoginState {
    email: string;
}

export class NotesListComponent extends React.Component<Props, LoginState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddNoteSubmit = this.handleAddNoteSubmit.bind(this);
    }

    handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value });
    }

    handleAddNoteSubmit() {
        const { email } = this.state;
        this.props.addNote(email);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleEmailChange} />
                <button onClick={this.handleAddNoteSubmit}>Submit</button>
            </div>
        );
    }
}