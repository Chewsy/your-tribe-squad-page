document.addEventListener('DOMContentLoaded', function () {
    let student;

    document.querySelectorAll('li').forEach(function (li) {

        li.addEventListener('click', function (e) {
            student = e.target.id;
            console.log(student);

            document.querySelectorAll('li').forEach(function (li) {
                li.classList.remove('active');
            });

            e.target.classList.add('active');
            document.querySelector('#intro h1').textContent = student;

            // Student info
            const info = {
                "Ahlam": "Just because it's taking time doesn't mean it's not happening.",
                "Anass": "Interesses:\ngaming, kickboks en Arsenal.",
                "Ayoub": "Ik hoop dit jaar veel te leren en het hopelijk succesvol af te ronden.",
                "Bronx": "Ik ben 18 jaar en studeer fdnd op het hva\n\nIn mijn vrije tijd doe ik veel aan fitness training en mijn grootste doel nu is om zelfstandig en structueel te kunnen developen.\n\nIk help graag mensen waar ik kan en waar het nodig is. Daarnaast ben ik altijd opzoek naar verbetering.",
                "Chama": "Ik ben iemand die leergierig, zorgzaam en ambitieus is.\n\nIn het dagelijks leven houd ik me bezig met de opleiding en socialiseren met vrienden.\n\nMijn vrije tijd besteed ik graag aan het luisteren en ontdekken van muziek, werken aan kleine projecten en een lange wandeling.",
                "Heba": "Ik heb geen voorkennis over het coderen maar ik ben heel nieuwsgierig naar deze opleiding!",
                "Iman": "",
                "Jadon": "Ik word beter dan chatgpt!!!\n\nMet HTML, CSS en JS kan ik vette, interactieve web apps maken.",
                "Jamie": "SKILLS:\nDEADLINE GERICHT WERKEN, DISCIPLINE, LEERGIERIG.",
                "Jamil": "",
                "Jasin": "Skills & Kwaliteiten:\nCommunicatief vaardig, Leergierig en nieuwsgierig, Gemotiveerd en doorzettend.\n\nInteresses:\nAuto’s & techniek, Front-end design, Samen projecten bouwen.",
                "Julian": "Ik volg momenteel de opleiding Front-end Design & Development.\n\nIk ben leergierig en altijd op zoek naar nieuwe kennis en technieken.\n\nMijn passie ligt bij creatieve en gebruiksvriendelijke webdesigns, en ik blijf mezelf graag ontwikkelen om steeds beter te worden.",
                "Ké": "Ik ben graag creatief en ♥ katten.",
                "Kevin": "Ik kan nog niet coderen maar ik doe erg mijn best.\n\nMet HTML, CSS en JS wil ik vette, interactieve web apps maken.",
                "Kurollos": "Ik ben geïnteresseerd in front-end design, omdat ik dol ben op creativiteit en met deze opleiding kan ik mijn kennis uitbreiden.\n\nIk lees wat fantasy boeken, ik beweeg met sporten als ik na buiten ga en ik game wat spelletjes..",
                "Luc": "",
                "Luka": "a.k.a. Mr. Moggington.",
                "Lynn": "Ik kijk er naar uit om mijn kennis te verbreden en mensen blij te maken met mijn werk. Sociaal, creatief en behulpzaam.",
                "Maarten": "Frontend Designer & Developer.",
                "Mathijs": "Sterk in communicatie, zelfstandigheid en samenwerken.",
                "Meraichio": "Groeiende Frontender.\n\nInteresses:\n werk, gamen en reizen.",
                "Mete": "Code is mijn superkracht!\n\nMet HTML, CSS en JS bouw ik gave, interactieve webervaringen.",
                "Sadaf": "Doelen:\nde studie, werken, cursussen, een eigen bedrijf en websites maken voor ondernemers.",
                "Sieuwke": "Werkervaring:\nfotograaf en ervarings-deskundige Autisme\n \nHobbies:\nhandwerkjes, dieren, gamen\n\nAmbities:\nFrontend designer & developer.",
                "Tom": "Hobbies:\ngaming, making/editing music, meeting with friends, modding/hacking games, Interacting online with people, mostly on Discord.",
                "Yassine": "Ik kom uit amsterdam noord.\n\nik heb deze opleiding gekozen omdat ik van bouwen houd, ik zie mezelf later als full stack developer werken in een team.\n\nIn mijn vrije tijd sport ik graag of kijk ik een film/serie.",
            };
            document.querySelector('#intro p').textContent = info[student];
        })
    });
});


/*
querySelectorAll
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

forEach
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach

addEventListener
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Event.target
https://developer.mozilla.org/en-US/docs/Web/API/Event/target

DOMContentLoaded
https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

classList
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
*/
