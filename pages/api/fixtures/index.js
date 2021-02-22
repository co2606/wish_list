const LISTNAMES = [
  'some list',
  'a really cool list',
  'this list is just okay',
  'whos ready to shop??',
]

const LISTDESCRIPTIONS = [
  'this list has some thing in it',
  'buy something from here, IF YOU DARE!!!',
  'i\'m not sure what to put here',
]

const ITEMNAMES = [
  'pocket blaster 1000',
  'humdinger',
  'rocket maching',
  'woke mr potato head',
]

const ITEMDESCRIPTIONS = [
  'some cool thing',
  'this thing is good enough',
  'a thing that everyone needs!',
  'it\'s dumb not to have this thing',
]
  
const ITEMURLS = [
  'https://www.amazon.com/Conair-Dryer-Ionic-Conditioning-Chrome/dp/B003FBG88E',
  'https://www.amazon.com/Razors-Safety-Blades-Shaving-Delicate/dp/B07YFH9P6Z',
  'https://www.amazon.com/dp/B07KK9YGZ4',
  'https://www.amazon.com/dp/0143035002',
  'https://www.amazon.com/dp/B078T9SZ3K',
]

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomListItem = () => ({
  name: getRandomElement(ITEMNAMES),
  description: getRandomElement(ITEMDESCRIPTIONS),
  url: getRandomElement(ITEMURLS),
  price: getRandomInt(1000),
  claimed: Math.random() > 0.5 ? true : false,
})

const getRandomList = () => ({
  name: getRandomElement(LISTNAMES),
  description: getRandomElement(LISTDESCRIPTIONS),
  items: getRandomInt(10).map(getRandomListItem),
})

export default getRandomList;
