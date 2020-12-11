import React from 'react';
import './UserGroup.css';
import GroupRequest from './GroupRequest';

const UserGroup = ({ group, handlename, handledescription }) => {
  return (
    <>
      {group.length === 0 ? (
        <GroupRequest />
      ) : (
        <div className="usergroup">
          <div className="usergroup__form">
            <i
              className=" usergroup__formicon fa fa-user fa-5x"
              aria-hidden="true"
            ></i>
            <div className="usergroup__formname">
              <h2>Name</h2>
              <div className="field">{handlename}</div>
            </div>

            <div className="usergroup__formdescription">
              <h2>Description</h2>
              <div className="field">{handledescription}</div>
            </div>
          </div>
          <div className="usergroup__cardwrap">
            {group.map((user) => {
              return (
                <div className="usergroup__card" key={user.id}>
                  <div className="usergroup__image">
                    <img src={user.Image} alt={user.name}></img>
                  </div>
                  <div className="usergroup__name">{user.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UserGroup;
