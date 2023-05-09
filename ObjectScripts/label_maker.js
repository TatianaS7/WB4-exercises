let myInfo = {
    name: "Tatiana Stewart",
    address: "1 AMB Drive NW",
    city: "Atlanta",
    state: "GA",
    zip: "30313",
};

function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city + "," + " " + myInfo.state + " " + myInfo.zip);
}

printContact(myInfo);