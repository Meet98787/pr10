import React from 'react'
import { Link } from 'react-router-dom'
// import { StudentList } from './Studentlist'
import { useState } from 'react'
import { useEffect } from 'react';


export default function Students() {
  const [studentList, setStudentList] = useState(JSON.parse(localStorage.getItem("studentlist")));
  const [filters, setFilters] = useState({
    search: '',
    gender: 'both',
    sort: ''
  });
  const [filteredStudents, setFilteredStudents] = useState(studentList);

  useEffect(() => {
    let filteredData = studentList.filter(student => {
      const isMatch = student.stname.toLowerCase().includes(filters.search.toLowerCase()) &&
                       (filters.gender === 'both' || student.gender.toLowerCase() === filters.gender.toLowerCase());
      return isMatch;
    });

    
    if (filters.sort === 'mark') {
      filteredData.sort((a, b) => a.maths - b.maths);
    } 
    else if (filters.sort === 'emark') {
      filteredData.sort((a, b) => a.english - b.english);
    }
    else if (filters.sort === 'smark') {
      filteredData.sort((a, b) => a.scince - b.scince);
    }
    else if (filters.sort === 'cmark') {
      filteredData.sort((a, b) => a.computer - b.computer);
    } else if (filters.sort === 'address') {
      filteredData.sort((x, y) => (x.address > y.address ? 1 : -1))
    }else if (filters.sort === 'name') {
         filteredData.sort((a, b) => a.stname.localeCompare(b.stname));
       } 

    setFilteredStudents(filteredData);
  }, [filters, studentList]);

  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleFilter = (e) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  const handleSort = (e) => {
    setFilters({ ...filters, sort: e.target.value });
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    const updatedList = [...studentList];
    updatedList.splice(id, 1);
    setStudentList(updatedList); // Update the state to trigger re-render
    localStorage.setItem("studentlist", JSON.stringify(updatedList));
  };


  return (
    <div class="list p-3">
      <h1 class="text-center fw-bolder mt-3 border-bottom">Students List</h1>
      <div className='filter text-center d-flex align-items-center justify-content-between m-3'>
      <Link className='btn btn-primary  me-2' to={`/student/addstudent`}>Add Student</Link>
      <input type="text" id="" placeholder='Search by Name...'  onChange={handleSearch} />
      <div>
      <input type="radio" name="gender" id="" value="male" className='p-2' onChange={handleFilter} />
      <label htmlFor="" className='p-2 text-muted'>Male</label>
      <input type="radio" name="gender" id="" value="female" className='p-2' onChange={handleFilter} />
      <label htmlFor="" className='p-2 text-muted'>Female</label>
      <input type="radio" name="gender" id="" value="both" className='p-2' onChange={handleFilter} />
      <label htmlFor="" className='p-2 text-muted'>Both</label>
      </div>
      <select className="p-2  text-muted" onChange={handleSort} >
                        <option defaultValue>Shot by ...</option>
                        <option value="name">Name</option>
                        <option value="mark">Maths Mark</option>
                        <option value="emark">English Mark</option>
                        <option value="smark">Scince Mark</option>
                        <option value="cmark">Computer Mark</option>
                        <option value="address">Adress</option>
                    </select>
      {/* <button onClick={handleSort} value="address">vdx</button> */}
      </div>
      <table class="table table-bordered rounded rounded-3">
        <thead class="bg-light">
          <tr>
            <th class="text-black fs-4 text-center">Student Name</th>
            <th class="text-black fs-4 text-center">Student Class</th>
            <th class="text-black fs-4 text-center">DOB</th>
            <th class="text-black fs-4 text-center">Gender</th>
            <th class="text-black fs-4 text-center">Father Name</th>
            <th class="text-black fs-4 text-center">Mother Name</th>
            <th class="text-black fs-4 text-center">Contact Number</th>
            <th class="text-black fs-4 text-center">Address</th>
            <th class="text-black fs-4 text-center">Maths</th>
            <th class="text-black fs-4 text-center">Computer</th>
            <th class="text-black fs-4 text-center">Scince</th>
            <th class="text-black fs-4 text-center">English</th>
            <th class="text-black fs-4 text-center">Email id</th>
            <th class="text-black fs-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody id="user-data-list">
          {filteredStudents && filteredStudents.length>0?
          filteredStudents.map((st, key) => (
            <tr key={key}>

              <td class="fs-4 text-center">{st.stname}</td>
              <td class="fs-4 text-center">{st.stclass}</td>
              <td class="fs-4 text-center">{st.stdob}</td>
              <td class="fs-4 text-center">{st.gender}</td>
              <td class="fs-4 text-center">{st.fname}</td>
              <td class="fs-4 text-center">{st.mname}</td>
              {/* hjkjopl price name price hotal 1000 range set price <e className="target value">range = on input handal input h1 price sprice </h1></e>*/}
              <td class="fs-4 text-center">{st.cnumber}</td>
              <td class="fs-4 text-center">{st.address}</td>
              <td class="fs-4 text-center">{st.maths}</td>
              <td class="fs-4 text-center">{st.computer}</td>
              <td class="fs-4 text-center">{st.scince}</td>
              <td class="fs-4 text-center">{st.english}</td>
              <td class="fs-4 text-center">{st.uEmail}</td>
              <td class="fs-4 text-center">
                <Link className='btn btn-success me-2' to={`/student/view/${key}`}>VIEW</Link>
                <Link className='btn btn-warning me-2' to={`/student/edit/${key}`}>Edit</Link>
                <a href="" className='btn btn-danger' onClick={(e) => handleDelete(e, key)}
                >Delete</a>
              </td>
            </tr>
          )):<tr><td  colspan="14"><h1 className='text-center'>Student Not Found</h1></td></tr>
          }

        </tbody>
      </table>
    </div>
  )
}
