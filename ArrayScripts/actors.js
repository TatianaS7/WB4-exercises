let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];
    // Who is the Academy Member whose ID is 187?

    function id187(array) {
        let member = [];

        for (i = 0; i < array.length; i++) {
            let contents = array[i].name;
            if (array[i].memID === 187) {
                member.push(contents);
            }
        }
        console.log(`The Academy Member whose ID is 187 is ${member}`);
    }
id187(academyMembers);

    // Who has have been in at least 3 films?
    function atLeast3(array) {
        let member = [];
        for (i = 0; i < array.length; i++) {
            let contents = array[i].name;
            if (array[i].films.length >= 3 ) {
                member.push(contents);
            }
        }
        console.log(`The Academy Members who have been in at least 3 films are ${member}`);
    }
atLeast3(academyMembers);

    // Who has a name that starts with "Bob"?

    function startsWithBob(array) {
    let member = [];
    
    for (i = 0; i < array.length; i++) {
        let contents = array[i].name;

        if (array[i].name.includes("Bob ")) {
            member.push(contents);
        }
    }
    console.log(`${member} has a name that starts with "Bob"`);
}
startsWithBob(academyMembers);

    // HARDER: Which Academy Members have been in a film
    // that starts with "A"

    function startsWithA(array) {
      let member = [];

      for (i = 0; i < array.length; i++) {
        let contents = array[i].name;
        
        for (j = 0; j < array[i].films.length; j++) {
          if (array[i].films[j].startsWith("A")) {
            member.push(contents);
            break;
          }
        }
      }
      console.log(`${member} has been in a film that starts with "A" `);
    }
    startsWithA(academyMembers);