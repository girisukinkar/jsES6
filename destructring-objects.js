const personalInformation = {
  firstName: "Girish",
  lastName: "Sukinkar",
  city: "Thane",
  state: "Maharashtra",
  zipCode: "400604"
};

//Destructuring Objects

const { firstName : fn, lastName: ln  } = personalInformation;

console.log(`${fn} ${ln}`);