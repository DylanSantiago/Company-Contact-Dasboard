function displayHTML (displayCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Company Contact Dashboard</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
        <section class ="container-fluid"> 
            <section class = "row">
                <div class = "mt-4 p-5 bg-primary text-white">
                    <h1 class = "text-center">My Team</h1>
                </div>
            </section>
        </section>

        <section class ="container col-12 p-3">
            <div class = "row d-flex justify content-center">

                ${displayCards}

            </div>
        </section>
        
    </body>
    </html>`
};

function displayStaff (roster) {
   
    const staffCards = [];

    for (let i = 0; i < roster.length; i++) {
        const staffMember = roster[i];
        const staffRole = staffMember.getRole();

        if (staffRole === 'Manager') {
            const manager = promptManager(staffMember)
            staffCards.push(manager)
        }
       
        if (staffRole === 'Engineer') {
            const engineer = addEngineer(staffMember)
            staffCards.push(engineer)
        }

        if (staffRole === 'Intern') {
            const intern = addIntern(staffMember)
            staffCards.push(intern)
        }
    }
    const displayCards = staffCards.join('');
    
    return displayHTML(displayCards);
};

function promptManager(manager) {
    return `
    <section class = "card col-3 m-3">
        <div class = "card-header">
            <h2>${manager.name}</h2>
            <h3> Manager </h3>
        </div>
        <div class = "card-body bg-primary ">
            <ul class = "list-group">
                <li class = "list-group-item"> Employee ID: ${manager.id}</li>
                <li class = "list-group-item"> Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class = "list-group-item"> Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </section>
`
};

function addEngineer(engineer) {
    return `
    <section class = "card col-3 m-3">
        <div class = "card-header">
            <h2>${engineer.name}</h2>
            <h3> Engineer </h3>
        </div>
        <div class = "card-body bg-primary">
            <ul class = "list-group">
                <li class = "list-group-item"> Employee ID: ${engineer.id}</li>
                <li class = "list-group-item"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class = "list-group-item"> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </section>
`
};

function addIntern(intern) {
    return `
    <section class = "card col-3 m-3">
        <div class = "card-header">
            <h2 class = "card-title">${intern.name}</h2>
            <h3 class = "card-title"> Intern </h3>
        </div>
        <div class = "card-body bg-primary">
            <ul class = "list-group">
                <li class = "list-group-item"> Employee ID: ${intern.id}</li>
                <li class = "list-group-item"> Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class = "list-group-item"> School: ${intern.school}</li>
            </ul>
        </div>
    </section>
`
};

module.exports = displayStaff;