import axios from 'axios'
import Link from "next/link";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createList = () => {  
  const url = `/api/list/${getRandomInt(999)}`
  console.log(url);
  axios.post(url).then((res) => console.log(res.data))
}

export default function Home() {
  return (
      <>
        <h3>create list</h3>
        <input type='text' placeholder='list id' />
        <input type='text' placeholder='req body' />
        <button onClick={createList}>submit</button>
        <br/><br/>

        <h3>update list</h3>
        <input type='text' placeholder='list id' />
        <input type='text' placeholder='req body' />
        <button>submit</button>
        <br/><br/>

        <h3>read list</h3>
        <input type='text' placeholder='list id' />
        <button>submit</button>
        <br/><br/>

        <h3>delete list</h3>
        <input type='text' placeholder='list id' />
        <button>submit</button>
        <br/><br/>

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