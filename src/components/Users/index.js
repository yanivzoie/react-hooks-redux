import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions/usersActions';
import User from '../User';

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await props.fetchData();
    return await setUsers(res);
  };

  return (
    <div>
      {props.usersState.users.map((item, index) => (
        <User key={index} name={item.name} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  usersState: state.usersRedusersucer,
  loading: state.loading,
});

// const mapDispatchToProps = {
//   searchUser,
//   fetchData,
// };

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
