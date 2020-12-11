import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserGroup from './components/UserGroup';
import NavLink from './components/NavLink';
import './App.css';

const App = () => {
  const [list, setList] = useState([]);
  const [group, setGroup] = useState([]);
  const [handlename, setHandlename] = useState('');
  const [handledescription, setHandledescription] = useState('');

  const onInputChange = (x) => {
    setHandlename(x);
  };

  const onDescriptionChange = (x) => {
    setHandledescription(x);
  };
  const updatedList = (list) => {
    const x = [];
    list.map((user) => {
      return <> {user.selected === true ? x.push(user) : null} </>;
    });
    setGroup(x);
  };

  const ontoggleCardSelect = (idx) => {
    list.map((user) => {
      return <>{user.id === idx ? (user.selected = !user.selected) : null}</>;
    });
    const copy = [...list];
    setList(copy);
  };

  const getList = async () => {
    const response = await axios.get(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
    );

    const x = response.data.map((user) => {
      return { ...user, selected: false };
    });
    setList(x);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div>
          <NavLink />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <>
                  <UserList
                    list={list}
                    ontoggleCardSelect={ontoggleCardSelect}
                    updatedList={updatedList}
                    onInputChange={onInputChange}
                    onDescriptionChange={onDescriptionChange}
                  />
                </>
              );
            }}
          />
          <Route
            path="/usergroup"
            exact
            render={() => {
              return (
                <>
                  <UserGroup
                    group={group}
                    handlename={handlename}
                    handledescription={handledescription}
                  />
                </>
              );
            }}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
