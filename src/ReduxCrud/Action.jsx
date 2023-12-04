import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Action() {
  const state = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!newStudent.name.trim() || !newStudent.email.trim()) {
      // Check if either name or email is empty or contains only whitespace
      alert('Name and Email are required!');
      return;
    }
  
    if (editIndex !== null) {
      dispatch({
        type: 'updateData',
        payload: { index: editIndex, data: newStudent },
      });
      setNewStudent({ name: '', email: '' });
      setEditIndex(null);
    } else {
      dispatch({
        type: 'addData',
        payload: newStudent,
      });
      setNewStudent({ name: '', email: '' });
    }
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'deleteData',
      payload: id,
    });
  };

  const handleEdit = (index) => {
    setNewStudent({ ...state[index] });
    setEditIndex(index);
  };

  return (
    <div className="container row m-auto">
      <div className="col-6 mt-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control "
            id="name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          required/>
        </div>
        <button className="btn btn btn-success" onClick={handleAdd}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="col-6 mt-3">
        <table className="table table-border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {state &&
              state.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn btn-warning" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Action;
