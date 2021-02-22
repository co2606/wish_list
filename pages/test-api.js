import axios from 'axios'
import Link from "next/link";

import { getRandomInt, getRandomList } from './api/fixtures';

const baseUrl = '/api/list/';

const createList = () => {  
  const visibleId = getRandomInt(999);
  const url = baseUrl + visibleId;
  console.log(url);
  axios.post(url).then((res) => console.log(res.data))
}

export default function Home() {
  return (
      <>
        <h3>create list</h3>
        <input type='text' placeholder='list id' />
        <button onClick={createList}>submit</button>
        <br/><br/><br/><br/>

        <h3>update list</h3>
        <input type='text' placeholder='list id' />
        <button>submit</button>
        <br/><br/><br/><br/>

        <h3>read list</h3>
        <input type='text' placeholder='list id' />
        <button>submit</button>
        <br/><br/><br/><br/>

        <h3>delete list</h3>
        <input type='text' placeholder='list id' />
        <button>submit</button>

      </>
  )
}


// export const getRandomReqBody = () => {
//   return {
//     list: {
//       id: ,
//       name: ,
//       message: ,
//     },
//     listEntries: {
//       {
//         id: ,
//         name: ,
//         url: ,
//       },
//     },
//   }
// };

// axios({
//   method: 'post',
//   url: '/list',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });