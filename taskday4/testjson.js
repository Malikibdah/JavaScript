/** @format */

const names = ["Omar", "Nour", "Malik"];
console.log(names);
const jsonNames = JSON.stringify(names);
console.log(jsonNames);

///////////////////////////////////////////////////////////////////////
const example = {
  squadName: "Super Hero Squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
};

console.log(example);
console.log(typeof example);

const jsonString = JSON.stringify(example);

console.log(jsonString);
console.log(typeof jsonString);
let jsonoutput=JSON.parse(jsonString);
console.log(jsonoutput);


// const jsonJava = JSON.parse(jsonString);
// console.log(jsonJava);
const malik=[
    {
      "name": "malik",
      "age": 29,
      "secretIdentity": "ibdah",
      "hoppy": ["football", "tenes", "gaming"]
    },
    {
      "name": "arab",
      "age": 75,
      "secretIdentity": "Jane Wilson",
      "contry": [
        "jordan",
        "palestine",
        "syria"
      ]
    }
  ]
  console.log(typeof malik);
  const josnmalik= JSON.stringify(malik);
  console.log(josnmalik);
  console.log(typeof josnmalik);
  const newmalik= JSON.parse(josnmalik);
  console.log(newmalik);
  console.log(typeof newmalik);
