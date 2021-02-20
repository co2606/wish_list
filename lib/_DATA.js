let list = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    listTitle: "Fido's Birthday List",
    listMessage: "Fido's Birthday is March 11th",
    timestamp: 1467166872634,
    itemOne: {
      itemName: "Water Bowl",
      itemUrl: "www.pets.com",
      itemNote: "color blue"
    },
    itemTwo: {
      itemName: "Dog collar",
      itemUrl: "www.pets.com",
      itemNote: "size small"
    },
    itemThree: {
      itemName: "Chew toy",
      itemUrl: "www.pets.com",
      itemNote: null
    }
  }
};

function _getList() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...list }, console.log("here", list)), 3000);
  });
}

//export function getInitialData() {
  //return Promise.all([_getList()]).then(([list]) => ({
    //list
  //}, console.log(list)));
//}

export function getInitialData() {
  return _getList().then((list) => ({
    list
  }, console.log("here2", list)))
}