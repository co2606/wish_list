import { useState } from "react";
import Link from "next/link";
import axios from 'axios'


import getRandomList from './api/fixtures';

const baseUrl = '/api/list/';

const createList = (visibleID) => {
  const url = baseUrl + visibleID;
  console.log(url);

  const listData = getRandomList();
  axios.post(url, listData).then((res) => console.log(res.data))
}

const updateList = (visibleID) => {
  const url = baseUrl + visibleID;
  console.log(url);

  const listData = getRandomList();
  axios.put(url, listData).then((res) => console.log(res.data))
}

const readList = (visibleID) => {
  const url = baseUrl + visibleID;
  console.log(url);
  axios.get(url).then((res) => console.log(res.data))
}

const deleteList = (visibleID) => {
  const url = baseUrl + visibleID;
  console.log(url);
  axios.delete(url).then((res) => console.log(res.data))
}

const TestAPI = () => {
  const [visibleIDs, setVisibleIDs] = useState({
    create: '',
    update: '',
    read: '',
    delete: '',
  });

  return (
      <>
        <h3>create list</h3>
        <input
          type='text'
          placeholder='list id'
          value={visibleIDs.create}
          onChange={(e) => setVisibleIDs({...visibleIDs, create: e.target.value})}
        />
        <button onClick={() => createList(visibleIDs.create)}>submit</button>
        <br/><br/><br/><br/>

        <h3>update list</h3>
        <input
          type='text'
          placeholder='list id'
          value={visibleIDs.update}
          onChange={(e) => setVisibleIDs({...visibleIDs, update: e.target.value})}
        />
        <button onClick={() => updateList(visibleIDs.update)}>submit</button>
        <br/><br/><br/><br/>

        <h3>read list</h3>
        <input
          type='text'
          placeholder='list id'
          value={visibleIDs.read}
          onChange={(e) => setVisibleIDs({...visibleIDs, read: e.target.value})}
        />
        <button onClick={() => readList(visibleIDs.read)}>submit</button>
        <br/><br/><br/><br/>

        <h3>delete list</h3>
        <input
          type='text'
          placeholder='list id'
          value={visibleIDs.delete}
          onChange={(e) => setVisibleIDs({...visibleIDs, delete: e.target.value})}
        />
        <button onClick={() => deleteList(visibleIDs.read)}>submit</button>
        <br/><br/><br/><br/>

      </>
  )
}

export default TestAPI;
