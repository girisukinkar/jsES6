function getDetails(city, state) {
  //Old way of doing
  const newAddress = { city: city, state: state };
  console.log(newAddress);

  //New way:  no need to add keys if the properties are same
  //KEY : VALUE , newCity: City

  const Address = { city, state };
  console.log(Address);
}

getDetails("Thane", "Maharashtra");
