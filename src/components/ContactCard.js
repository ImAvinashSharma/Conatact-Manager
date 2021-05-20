import React from "react";
import user from "../img/user.png";
export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user icon" />
      <div className="content">
        <div className="header">{name}</div>
        <div className="">{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onChange={() => props.clickHander(id)}
      ></i>
    </div>
  );
}
