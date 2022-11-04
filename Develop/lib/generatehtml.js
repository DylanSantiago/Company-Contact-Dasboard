function displayHTML (displayCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Company Contact Dashboard</title>
    </head>
    <body>
        <section class =" "> 
            <section class = " ">
                <div class = " ">
                    <h1 class = " "></h1>
                </div>
            </section>
        </section

        <section class =" ">
            <div class = "">

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
        const staffRole = staffMember.staffRole;

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
    <section class = " ">
        <div class = " ">
            <h2>${manager.name}</h2>
            <h3> Manager </h3>
        </div
        <div class = " ">
            <ul class = " ">
                <li class = " "> Employee ID: ${manager.id}</li>
                <li class = " "> Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class = " "> Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </section>
`
};

function addEngineer(engineer) {
    return `
    <section class = " ">
        <div class = " ">
            <h2>${engineer.name}</h2>
            <h3> Engineer </h3>
        </div
        <div class = " ">
            <ul class = " ">
                <li class = " "> Employee ID: ${engineer.id}</li>
                <li class = " "> Email: <a href="mailto:${engineer.email}">${manager.email}</a></li>
                <li class = " "> Github: <a href="https://github.com/${engineer.github}>${engineer.github}</a></li>
            </ul>
        </div>
    </section>
`
};

function addIntern(intern) {
    return `
    <section class = " ">
        <div class = " ">
            <h2>${intern.name}</h2>
            <h3> Intern </h3>
        </div
        <div class = " ">
            <ul class = " ">
                <li class = " "> Employee ID: ${intern.id}</li>
                <li class = " "> Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class = " "> School: ${intern.school}</li>
            </ul>
        </div>
    </section>
`
};

module.exports = displayStaff