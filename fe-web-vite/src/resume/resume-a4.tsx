import React, { useState } from "react";
import {PersonalInfo, DocSection, camScott2024, JobTenure} from "./cam-scott-2024";
import classNames from "classnames";
import "./resume.scss"

const Bug = ({rf, msg}:{rf:string,msg:string}) => <span className="bug">
    <span className="ref">{rf}</span>
    <span className="msg">{msg}</span>
</span>;

type HnLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const HnLevelsMap:{[key:number]:HnLevels} = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
};
type HnTitleProps = { depth: number, children: string };
const HnTitle = ({depth, children}:HnTitleProps) => {
    return HnLevelsMap[depth] ? React.createElement(HnLevelsMap[depth], null, children) :
    <Bug rf="HnLevelsMap" msg={`HnTitle depth is ${depth}, no level match`}/>;
}

type SectionProps = { section: DocSection };
const Section = ({section}:SectionProps) => {
    return <div className="section">
        { section.title && <HnTitle depth={section.depth||0}>{section.title}</HnTitle> }
        { section.content && <ul>
            { section.content.map((content, n) => <li key={n}>{content}</li>) }
        </ul> }
    </div>;
}

type ProfileProps = { profile: PersonalInfo };
const Profile = ({profile}:ProfileProps) => {
    return <div className="profile">
        {/* <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <div className="contact">
            <div className="email">{profile.contact.email}</div>
            <div className="phone">{profile.contact.phone}</div>
            <div className="address">{profile.contact.address}</div>
            <div className="website">{profile.contact.website}</div>
        </div> */}
        {profile.sections.map((section, n) => <Section key={n} section={section} />)}
    </div>
}

const BackDrop = () => <div className="backdrop">
    <div className="bd3"/>
    <div className="bd1"/>
    <div className="bd2"/>
    </div>;
type WorkHistoryProps = { history: JobTenure[] };

type JobTenureBlockProps = { job: JobTenure };
const JobTenureBlock = ({job}:JobTenureBlockProps) => <div className="job-tenure">
    <h3>{job.employer.name}</h3>
    <h4>{job.title}</h4>
    <div>
        <span className="start">{job.start}</span>
        <span className="end">{job.end}</span>
    </div>
    <div className="description">{job.description}</div>
    <div className="technology">{job.technology}</div>
    <div className="accomplishments">{job.accomplishments}</div>
</div>;

const WorkHistory = ({history}:WorkHistoryProps) => <div className="work-history">
    {history.map((job, n) => {
        return <div key={n} className="JobTenure">
                <JobTenureBlock job={job} />
            </div>
        }
    )}
</div>;

const NameHeader = ({name}:{name:string}) => <div className="name-header"><h1>{name}</h1></div>;
const ContactHeader = ({contactInfo}:{contactInfo:PersonalInfo}) => {
    const [isFocused, setIsFocused] = useState(false);
    const toggFocus = () => setIsFocused(!isFocused);
    const classes = classNames("contact-header is-focusable", {isFocused});
    return <div className={classes} onClick={toggFocus}>
        <div className="bg-facade" />
        <h4 className="person-name focus-only">{contactInfo.name}</h4>
        <ul>
            <li><label>P</label><span aria-description="Phone Number">{contactInfo.contact.phone}</span></li>
            <li><label>E</label><span aria-description="Email">{contactInfo.contact.email}</span></li>
            <li><label>W</label><span aria-description="Website">{contactInfo.contact.website}</span></li>
            <li><label>A</label><span aria-description="Physical Address">{contactInfo.contact.address}</span></li>
        </ul>
    </div>;
}
const IndexPanel = ({title}:{title:string}) => <h2>{title}</h2>;
const MainContent = ({title}:{title:string}) => <h2>{title}</h2>;

type ResumeProps = { isPrintMode?: boolean };
export const Resume = ({isPrintMode=false}:ResumeProps) => {
    const classes = classNames("resumeDocument", {printA4: isPrintMode});
    return <div className={classes}>
        <BackDrop />
        <NameHeader name={camScott2024.info.name} />
        <ContactHeader contactInfo={camScott2024.info} />
        <Profile profile={camScott2024.info} />
        <WorkHistory history={camScott2024.history} />
    </div>
}