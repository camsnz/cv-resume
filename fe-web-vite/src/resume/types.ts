
export type DocSection = {
    title: string;
    content: string[];
    subsections?: DocSection[];
    depth?: number;
}

export type Profile2024 = {
    info: PersonalInfo;
    groups: DocSection[];
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
    website?: string;
    notssl?: boolean,
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
    summaryOnly?: boolean;
    ignore?: boolean;
};
