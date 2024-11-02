import React from 'react'
import Header from "./entities/Header";
import Direction from "../direction";
import AddingUser from '../AddingUser';

const CreateUser = (props) => {
  return (
    <>
       <Header changeUser={props.changeUser} data={props.data} />
       <Direction/>
       <AddingUser/>
    </>
  )
}

export default CreateUser
