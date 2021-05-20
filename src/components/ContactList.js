import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
export default function ContactList(props) {
  const deletsContactHandeler = id => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deletsContactHandeler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
