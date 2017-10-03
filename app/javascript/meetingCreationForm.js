import { h, render, Component } from 'preact';

class MeetingCreationForm extends Component {
  render() {
    return <form>
            <input type="text" class="meeting-name" value="Meeting name"></input>
           </form>;
  }
}
