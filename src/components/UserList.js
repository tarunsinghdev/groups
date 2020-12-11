import React, { useState } from 'react';
import './UserList.css';
import { Button } from '@material-ui/core';

const UserList = ({
  list,
  ontoggleCardSelect,
  updatedList,
  onInputChange,
  onDescriptionChange,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const myData = list.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return (
    <div className="userlist">
      <div className="userlist__mainheading">Create Group</div>
      <div className="userlist__form">
        <div className="userlist__formlogo">
          <i className="fa fa-user fa-5x" aria-hidden="true"></i>
        </div>
        <div className="userlist__formcontent">
          <label htmlFor="input"> Name </label>
          <input
            id="input"
            value={name}
            onChange={(e) => {
              onInputChange(e.target.value);
              setName(e.target.value);
            }}
            to="input"
            type="text"
            placeholder="Enter Group Name"
          />
          <label htmlFor="description"> Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => {
              onDescriptionChange(e.target.value);
              setDescription(e.target.value);
            }}
            className="userlist__formdescription"
            to="description"
            type="text"
            placeholder="Enter Description"
          />
        </div>
      </div>
      <div className="userlist__cardwrap">
        {myData.map((user) => {
          return (
            <div
              className="userlist__card"
              onClick={() => {
                ontoggleCardSelect(user.id);
              }}
              key={user.id}
            >
              <div className="userlist__image">
                <img src={user.Image} alt={user.name}></img>
                <div className="userlist__cardcheck">
                  {user.selected && <i className="fa fa-check "></i>}
                </div>
              </div>
              <div className="userlist__name">{user.name}</div>
            </div>
          );
        })}
      </div>
      <div className="userlist__buttons">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            updatedList(list);
            alert(
              'Your group has been updated, please check "Visit Group" page'
            );
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default UserList;
