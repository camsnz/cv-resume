import { Profile2024 } from "../resume/types";

export const camScott2024:Profile2024 = {
    info: {
        name: "Cam Scott",
        title: "Software Engineer",
        contact: {
            email: "cameronscott@gmail.com",
            // email: "jobs@cams.nz",
            phone: "+64 (0) 22 137 2270",
            address: "Wellington, NZ",
            linkedin: "camsnz",
            website: "https://cams.nz"
        },
        sections: [
            {
                title: "About Me",
                content: [
                    "I've been building software since 2004, across a wide variety of languages, technologies and industries. I simply enjoy solving problems, whether that be low in the details of complex and pernicious financial systems, or the broader solutions architecture and fulfilling the needs of product feature teams.",
                    "From this, I've built a broad and deep technical experience, with many years building teams and products across banking, fintech and more.",
                    "I prefer environments that enable being hands on with the tools, collaborating on problems, and empower learning amongst teams.",
                ],
                subsections:[],
            },
            {
                title: "Most Recently",
                content: [
                    "After returning to NZ in late 2021, I've had the luxury of taking a break, mainly focusing on family. However I am itching to return to building solutions again, especially preferring the steady cadence of working with local teams.",
                    "My steady interests in tech have always allowed me to stay fresh, but I'm aware of how work gaps can be perceived. So to kick things off I've quickly written this CV with some of the technology I've seen in-demand locally.",
                    "This first June 2024 version utilises React, TS, SCSS, NodeJS, GCP and Docker, and is visible on github. Based on the Wellington market I expect to add microservice and auth demos with ASP.NET, AWS, OAuth and some modern tooling panache",
                    "References available on request.",
                ],
                subsections:[],
            }
        ]
    },
    groups: [
        {
            title: "Culture",
            content: ["Tech Leadership", "Mentoring", "CI Delivery", "Agile", "Scrum", "Kanban"],
        },
        {
            title: "Languages",
            content: ["JS | TS","Java","Python","C#","Bash",],
        },
        {
            title: "Frameworks",
            content: ["React", "Node.js", "SpringBoot"],
        },
        {
            title: "Runtimes",
            content: ["Docker", "AWS", "GCP", "Terraform", "Nixos"],
        },
    ],
    history: [
        {
            employer: {
                id: "crystaldelta",
                name: "Crystal Delta",
                industry: "Finance",
                location: "Remote & Melbourne VIC Australia",
                website: "crystaldelta.com"
            },
            end: "2022-05-01",
            start: "2022-03-01",
            technology: ["Java", "SQL"],
            title: "Engineering Consult",
            description: [
                "Short-term assist with urgent updates to bespoke financial modelling software. Involved technical interfacing with client, software features & fixes, and support to other developers.",
            ],
            accomplishments: [],
            // summaryOnly: true,
            // ignore: true,
        },
        {
            employer: {
                id: "paycomau",
                name: "Pay.com.au",
                industry: "Fintech & Payment Systems",
                location: "Remote & Melbourne VIC Australia",
                website: "pay.com.au"
            },
            end: "2021-10-30",
            start: "2020-07-01",
            technology: ["Node.js", "GraphQL", "React", "TS", "AWS", "SQS", "SNS", "DynamoDB", "Lambda", "Cognito", "mongo", "SAAS"],
            title: "CTO | Lead Engineer",
            description: [
                "Rapidly built a customer-ready payments platform from scratch, around a unique value proposition in close collaboration with major credit card companies.",
            ],
            accomplishments: [
                "Laid out technology and architectural approach, hired and grew multiple development teams across regions worldwide.",
                "Lean build strategies like codegen from gql schema for producing types, UI and doc-store bindings to streamline feature building and limit developer overhead.",
                "High cadence on SAAS integrations via modularisation and messaging.",
                "UX reuse to conform to design guidelines across web, email, reporting.",
            ],
        },
        {
            employer: {
                id: "crystaldelta",
                name: "Crystal Delta",
                industry: "Consulting across Banking",
                location: "Melbourne VIC Australia",
                website: "crystaldelta.com"

            },
            end: "2019-12-01",
            start: "2018-07-01",
            technology: ["TS/JS", "React", "Redux", "Node.js", "kotlin", "Java", "AWS", "SQS", "SNS", "DynamoDB", "Lambda", "S3"],
            title: "Technical Team Leader",
            description: [
                "Organisational change and modernisation in services delivery at NAB.",
                // "ANZ: dev engineer in incubator for mortgage lender Lightspeed | One Two Loans",
            ],
            accomplishments: [
                "Unification of legacy core platform data sources into GraphQL APIs.",
                "Led developers on a journey converting 'untouchable', frozen and undocumented financial modelling code into verifiable, self-explaining microservices.",
            ],
        },
        {
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "Melbourne VIC Australia",
                website: "www.ioof.com.au"

            },
            end: "2018-06-31",
            start: "2016-08-01",
            technology: ["TS/JS", "React", "Redux", "Node.js", "Java", "Docker", "Mainframe & Legacy Systems"],
            title: "Client First Software Engineer",
            description: [
                "Really unique opportunity to make engineering a hands-on partner with business services. Some of the leanest, cleanest work of my career making peoples lives easier and getting more value out of existing systems."
            ],
            accomplishments: [],
        },
        {
            employer: {
                id: "dius",
                name: "DiUS",
                industry: "Consulting across Finance, Insurance, Communications",
                location: "Melbourne VIC Australia",
                website: "dius.com.au"
            },
            end: "2016-05-01",
            start: "2014-07-01",
            technology: ["Java","Groovy","DropWizard","Cucumber","Docker","Clojure","Delphi"],
            title: "Software Engineer",
            description: [
                "Boutique consulting working on organisational change, and cultural development and delivery in technology."
            ],
            accomplishments: [
                "Greatly improved delivery flow rate and hiring capability, scaling development with tooling that reduced coupling and overhead.",
                "Delivered infra-as-code config & deploy using docker (pre kubernetes, compose), became a 150+ container per environment system.",
                "Migrated core-business logic from monolith desktop codebase to microservices.",
                "Talks and coaching on new technologies, ways of working and paradigms.",
            ],
        },
        {
            employer: {
                id: "pexa",
                name: "PEXA",
                industry: "Finance & Property Conveyance",
                location: "Melbourne VIC Australia",
                website: "pexa.com.au"
            },
            end: "2013-07-31",
            start: "2012-04-01",
            technology: ["Java", "JBoss", "Hibernate", "Oracle", "Linux", "Maven", "Mercurial", "JUnit", "Jenkins", "Selenium"],
            title: "Senior Systems Architect",
            description: ["Infrastructure design and technical support for the dev stream."],
            accomplishments: [],
            summaryOnly: true,
        },
        {
            employer: {
                id: "education-services",
                name: "Education Services",
                industry: "PP Government",
                location: "Melbourne VIC Australia",
                website: "esa.edu.au"
            },
            end: "2011-12-01",
            start: "2011-08-01",
            technology: [
                "Java", "JSP", "Solr", "Tomcat", "Unix", "Squid", "haproxy", "Juniper DX", "VMWare VSphere"
            ],
            title: "Senior Software Engineer",
            description: [],
            accomplishments: ["Codified complex securities regulations into computable rules for lending business."],
            summaryOnly: true,
        },
        {
            employer: {
                id: "ge-capital",
                name: "GE Capital",
                industry: "Finance",
                location: "Melbourne VIC Australia",
                website: "gecapital.com.au"
            },
            end: "2011-06-01",
            start: "2011-01-01",
            technology: [
                "Java", "IBM WAS7", "JAX-WS", "WSDL", "JPA", "SVN", "Maven", "Hudson"
            ],
            title: "Senior Software Developer",
            description: [],
            accomplishments: ["Codified complex securities regulations into computable rules for lending business."],
            summaryOnly: true,
        },
        {
            employer: {
                id: "suncorp",
                name: "Suncorp",
                industry: "Insurance",
                location: "Melbourne VIC Australia",
                website: "suncorp.com.au"

            },
            end: "2010-12-01",
            start: "2010-07-01",
            technology: [
                "Java", "Spring", "Struts", "Webdriver", "Selenium", "SVN", "Maven", "Ruby", "Hudson"
            ],
            title: "Senior Software Engineer",
            description: ["Feature development, Automated testing systems for web & mainframe migrations."],
            accomplishments: [],
            summaryOnly: true,
        },
        {
            employer: {
                id: "anz",
                name: "ANZ",
                industry: "Banking",
                location: "Melbourne VIC Australia",
                website: "anz.com.au"

            },
            end: "2010-05-01",
            start: "2009-08-01",
            technology: [
                "Java", "Bash", "Oracle SQL", "ClearCase", "Ant",
            ],
            title: "Senior Software Engineer",
            description: ["Build automation."],
            accomplishments: ["Reduced cross-team integrations from days to hours."],
            summaryOnly: true,
        },
        {
            employer: {
                id: "iag",
                name: "IAG",
                industry: "Insurance",
                location: "Melbourne VIC Australia",
                website: "iag.com.au"
            },
            end: "2009-07-01",
            start: "2009-03-01",
            technology: [
                "DataPower XSLT", "Websphere MQ", "Java", "Python", "Groovy", "Ant", "SVN", "Bash"
            ], 
            title: "Integration Deployment Manager",
            description: ["Buzz Insurance back-end integration, automating IBM Datapower deployment"],
            accomplishments: [],
            summaryOnly: true,
        },
        {
            employer: {
                id: "solnet",
                name: "Solnet",
                industry: "Consulting across Insurance and Banking",
                location: "Auckland NZ",
                website: "iag.com.au"
            },
            end: "2009-02-01",
            start: "2007-10-01",
            technology: [ "Java", "J2EE", "WSDL", "JSP", "Struts", "SQL", "jquery" ], 
            title: "Software Development Consultant",
            description: ["Full stack development projects for Suncorp, AAI, and Yellow Pages"],
            accomplishments: [],
            summaryOnly: true,
        },
        {
            employer: {
                id: "peace",
                name: "Hudson | First Data | Peace",
                industry: "Energy Systems",
                location: "Auckland NZ",
            },
            end: "2007-09-01",
            start: "2006-09-01",
            technology: [ "Java", "SQL" ], 
            title: "Application Developer",
            description: ["Store Transfer Load of meter & billing data into messaging systems."],
            accomplishments: [],
            summaryOnly: true,
        },
        {
            employer: {
                id: "compudigm",
                name: "Compudigm",
                industry: "Data Analytics",
                location: "Wellington NZ",
            },
            end: "2006-08-01",
            start: "2006-05-01",
            technology: [ "Delphi", "C++" ], 
            title: "Developer",
            description: ["Feature development on data visualisation software."],
            accomplishments: [],
            summaryOnly: true,
        },
        {
            employer: {
                id: "waikato-its",
                name: "ITS @ University of Waikato",
                industry: "IT | Education",
                location: "Hamilton NZ",
            },
            end: "2005-11-31",
            start: "2004-06-01",
            technology: [ ".NET", "ASP", "C#", "C++" ],
            title: "Junior Developer",
            description: [],
            accomplishments: [],
            summaryOnly: true,
        },
    ],
    education: [
        {
            institution: {
                id: "waikato",
                name: "University of Waikato",
                location: "Hamilton NZ",
                website: "waikato.ac.nz"
            },
            end: "2002-01-01",
            start: "2005-12-01",
            qualification: "BCMS | Bachelor of Computer & Mathematical Science",
        },
    ],
};