let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
    ];


// Which vehicles are RED?
function redVehicle(array) {
    let results = [];

    for (i = 0; i < array.length; i++) {
        contents = array[i].type;
        if (array[i].color === "Red") {
            results.push(contents);
        }
    }
    console.log(`The ${results.join(", ")} are Red.`);
}
redVehicle(vehicles);

// Which vehicles have registrations that are expired?
function expiredRegistration(array) {
    let results = [];

    for (i = 0; i < array.length; i++) {
        license = `${array[i].licenseNo} - `;
        expirationDate = ` expired: ${array[i].registrationExpires}`;

        if (array[i].registrationExpires < new Date) {
            results.push(license + expirationDate);
        }
    }
    console.log(`The vehicles with the following license numbers have registrations that are expired: ${results.join(", ")}.`);
}
expiredRegistration(vehicles);

// Which vehicles that hold at least 6 people?
function atLeast6(array) {
    let results = [];

    for (i = 0; i < array.length; i++) {
        vehicleType = array[i].color + " " + array[i].type;

        if (array[i].capacity >= 6) {
            results.push(vehicleType);
        }
    }
    console.log(`The ${results.join(", ")} all hold at least 6 people.`);
}
atLeast6(vehicles);

// Which vehicles have license plates that end with "222"?
function endsWith222 (array) {
    let results = [];

    for (i = 0; i < array.length; i++) {
        contents = array[i]
    }
}