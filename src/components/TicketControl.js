import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // selectedTicket: null,
      // editing: false
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    const action2 = a.selectTicket(null);
    dispatch(action2);
    // this.setState({selectedTicket: null});
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const action = a.addTicket(newTicket);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTicket = (id) => {
    const { dispatch } = this.props;
    // const selectedTicket = this.props.masterTicketList[id];
    const action = a.selectTicket(id);
    dispatch(action);
    // this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    const action2 = a.selectTicket(null);
    dispatch(action2);
    // this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editClick();
    dispatch(action);
    // this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    const action2 = a.editClick();
    dispatch(action2);
    const action3 = a.selectTicket(null);
    dispatch(action3);
    // this.setState({
    //   // editing: false,
    //   selectedTicket: null
    // });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing ) {      
      currentlyVisibleState = <EditTicketForm ticket = {this.props.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.props.selectedTicket != null) {
      currentlyVisibleState = 
      <TicketDetail 
        ticket = {this.props.selectedTicket} 
        onClickingDelete = {this.handleDeletingTicket} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ticket List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedTicket: state.selectedTicket
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;