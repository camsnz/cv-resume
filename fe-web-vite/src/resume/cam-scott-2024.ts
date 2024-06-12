
export type DocSection = {
    title: string;
    content: string[];
    subsections: DocSection[];
    depth?: number;
}

export type Profile2024 = {
    info: PersonalInfo;
    history: JobTenure[];
}

export type PersonalInfo = {
    name: string;
    title: string;
    contact: {
        email: string;
        phone: string;
        address: string;
        website: string;
    };
    sections: DocSection[];
};

export type Employer = {
    id: string;
    name: string;
    location: string;
    industry: string;
    website: string;
    logo?: string;
};

export type DateString = string;

export type JobTenure = {
    employer: Employer;
    title: string;
    description: string[];
    technology: string[];
    start: DateString;
    end: DateString;
    accomplishments: string[];
};

export const camScott2024:Profile2024 = {
    info: {
        name: "Cam Scott",
        title: "Software Engineer",
        contact: {
            email: "cameronscott@gmail.com",
            phone: "555-555-5555",
            address: "1234 Elm St, Anytown, USA",
            website: "camscott.dev"
        },
        sections: [
            {
                title: "About",
                content: [
                    ""
                ],
                subsections:[],
            }
        ]
    },
    history: [
        {
            accomplishments: [
                "Developed a new feature that increased user engagement by 30%",
                "Refactored legacy code to improve performance by 50%",
            ],
            description: [
                "Developed new features for the company's flagship product",
                "Worked closely with the design team to implement new designs",
                "Collaborated with other developers to solve complex technical challenges"
            ],
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "161 Collins St, Melbourne VIC 3000",
                website: "acme.com"

            },
            start: "2014-01-01",
            end: "2016-12-31",
            technology: ["React", "Node.js"],
            title: "Software Engineer"
        },
        {
            accomplishments: [
                "Developed a new feature that increased user engagement by 30%",
                "Refactored legacy code to improve performance by 50%",
            ],
            description: [
                "Developed new features for the company's flagship product",
                "Worked closely with the design team to implement new designs",
                "Collaborated with other developers to solve complex technical challenges"
            ],
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "161 Collins St, Melbourne VIC 3000",
                website: "acme.com"

            },
            start: "2014-01-01",
            end: "2016-12-31",
            technology: ["React", "Node.js"],
            title: "Software Engineer"
        },
        {
            accomplishments: [
                "Developed a new feature that increased user engagement by 30%",
                "Refactored legacy code to improve performance by 50%",
            ],
            description: [
                "Developed new features for the company's flagship product",
                "Worked closely with the design team to implement new designs",
                "Collaborated with other developers to solve complex technical challenges"
            ],
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "161 Collins St, Melbourne VIC 3000",
                website: "acme.com"

            },
            start: "2014-01-01",
            end: "2016-12-31",
            technology: ["React", "Node.js"],
            title: "Software Engineer"
        },
        {
            accomplishments: [
                "Developed a new feature that increased user engagement by 30%",
                "Refactored legacy code to improve performance by 50%",
            ],
            description: [
                "Developed new features for the company's flagship product",
                "Worked closely with the design team to implement new designs",
                "Collaborated with other developers to solve complex technical challenges"
            ],
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "161 Collins St, Melbourne VIC 3000",
                website: "acme.com"

            },
            start: "2014-01-01",
            end: "2016-12-31",
            technology: ["React", "Node.js"],
            title: "Software Engineer"
        },
        {
            accomplishments: [
                "Developed a new feature that increased user engagement by 30%",
                "Refactored legacy code to improve performance by 50%",
            ],
            description: [
                "Developed new features for the company's flagship product",
                "Worked closely with the design team to implement new designs",
                "Collaborated with other developers to solve complex technical challenges"
            ],
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "161 Collins St, Melbourne VIC 3000",
                website: "acme.com"

            },
            start: "2014-01-01",
            end: "2016-12-31",
            technology: ["React", "Node.js"],
            title: "Software Engineer"
        },
        {
            accomplishments: [
                "Developed a new feature that increased user engagement by 30%",
                "Refactored legacy code to improve performance by 50%",
            ],
            description: [
                "Developed new features for the company's flagship product",
                "Worked closely with the design team to implement new designs",
                "Collaborated with other developers to solve complex technical challenges"
            ],
            employer: {
                id: "ioof",
                name: "IOOF (Insignia Financial)",
                industry: "Finance & Superannuation",
                location: "161 Collins St, Melbourne VIC 3000",
                website: "acme.com"

            },
            start: "2014-01-01",
            end: "2016-12-31",
            technology: ["React", "Node.js"],
            title: "Software Engineer"
        },

    ]
};