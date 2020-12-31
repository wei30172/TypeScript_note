const logDetails = (item: string, uid: string | number, ) => {
  console.log(`${item} has a uid of ${uid}`);
}
logDetails('Claire', 123456); // Claire has a uid of 123
logDetails('Claire', '123xyz'); // Claire has a uid of 123

const talk = (user: {name: string, words: string | number}) => {
  console.log(`${user.name} says ${user.words} !`);
}

talk({name: 'Claire', words: 'yoyoyo'}); // Claire says yoyoyo !

// 可簡寫如下
type StringOrNum = string | number;
type ObjWithName = { name: string, words: StringOrNum };

const logDetails1 = (item: string, uid: StringOrNum) => {
  console.log(`${item} has a uid of ${uid}`);
}

const talk1 = (user: ObjWithName) => {
  console.log(`${user.name} says ${user.words}`);
}

const talkAgain = (user: ObjWithName) => {
  console.log(`${user.name} says ${user.words}`);
}