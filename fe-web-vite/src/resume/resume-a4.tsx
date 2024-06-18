import React, { useState } from "react";
import {PersonalInfo, DocSection, camScott2024, JobTenure} from "./cam-scott-2024";
import * as dfns from "date-fns";
import classNames from "classnames";
import "./resume.scss"
import avatarImg from "../avatar.jpeg";

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
    return HnLevelsMap[depth] ? React.createElement(HnLevelsMap[depth], {className:"title"}, children) :
    <Bug rf="HnLevelsMap" msg={`HnTitle depth is ${depth}, no level match`}/>;
}

type SectionProps = { section: DocSection, className?: string };
const Section = ({section, className}:SectionProps) => {
    const show = section.content && section.content.length > 0;
    return !show ? <></> : <div className={classNames("section", className)}>
        { section.title && <HnTitle depth={section.depth||4}>{section.title}</HnTitle> }
        { section.content && <ul>
            { section.content.map((content, n) => <li key={n}>{content}</li>) }
        </ul> }
    </div>;
}

type ProfileProps = { profile: PersonalInfo, className: string };
const Profile = ({profile, className}:ProfileProps) => {
    return <div className={classNames("profile",className)}>
        {profile.sections.map((section, n) =>
            <Section key={n} className="profile-item" section={{...section, depth: 2}} />
        )}
    </div>
}

type WorkHistoryProps = { history: JobTenure[] };

type JobTenureBlockProps = { job: JobTenure };

const fmtJobDate = (date:string) => dfns.format(date, "LLL Y")

const JobTenureBlock = ({job}:JobTenureBlockProps) => <div className={classNames("job-tenure", {summary: job.summaryOnly})}>
    <div className="header">
        <div className="title">
            <h4>{job.title}</h4>
            <h3>{job.employer.name}</h3>
        </div>
        <div className="time-period">
            <span className="start">{fmtJobDate(job.start)}</span> - <span className="end">{fmtJobDate(job.end)}</span>
        </div>
    </div>
    <Section key={"description"} className="description" section={{title: "", content: job.description}} />
    <Section key={"accomplishments"} className="accomplishments" section={{title: "Accomplishments", content: job.accomplishments}} />
    <Section key={"technology"} className="technology" section={{title: "Technology", content: job.technology}} />
    {/* <div className="technology">
        <h4>Technology</h4>
        <ul></ul>
        {job.technology.map(tech => <span className="tech">{tech}</span>)}
    </div>
    <div className="description">{job.description}
        <h4>Technology</h4>
    </div>
    <div className="accomplishments">{job.accomplishments}</div> */}
</div>;

const WorkHistory = ({history}:WorkHistoryProps) => <div className="work-history">
    <h2>Experience</h2>
    {history.map((job, n) => {
        return <div key={n} className="JobTenure">
                <JobTenureBlock job={job} />
            </div>
        }
    )}
</div>;

const AvatarHeader = () => <div className="avatar-header">
        <div className="content">
            <img src={avatarImg}></img>
        </div>
        <div className="bg-facade" />
</div>;
const PersonNameHeader = ({name}:{name:string}) => <div className="person-name-header"><h1>{name}</h1></div>;
const ContactHeader = ({contactInfo}:{contactInfo:PersonalInfo}) => {
    const [isFocused, setIsFocused] = useState(false);
    const toggFocus = () => setIsFocused(!isFocused);
    const classes = classNames("contact-header is-focusable", {isFocused});
    return <div className={classes} onClick={toggFocus}>
        {/* <h4 className="person-name focus-only">{contactInfo.name}</h4> */}
        <div className="content">
            <ul>
                <li><label>P</label><span className="value" aria-description="Phone Number">{contactInfo.contact.phone}</span></li>
                <li><label>E</label><span className="value" aria-description="Email">{contactInfo.contact.email}</span></li>
                <li><label>W</label><span className="value" aria-description="Website">{contactInfo.contact.website}</span></li>
                <li><label>L</label><span className="value" aria-description="Location">{contactInfo.contact.address}</span></li>
            </ul>
        </div>
        <div className="bg-facade" />
    </div>;
}
const IndexPanel = ({title}:{title:string}) => <h2>{title}</h2>;
const MainContent = ({title}:{title:string}) => <h2>{title}</h2>;

type MetaPaneProps = { groups: DocSection[] };
const MetaPane = ({groups}:MetaPaneProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const toggFocus = () => setIsFocused(!isFocused);
    return <div className={classNames("meta pane isFocusable",{isFocused})} onClick={toggFocus}>
        {groups.map((group, n) => <Section key={n} section={{...group, depth:4}} />)}
    </div>;
}

type ResumeProps = { isPrintMode?: boolean };
export const Resume = ({isPrintMode=false}:ResumeProps) => {
    const classes = classNames("resumeDocument", {isPrintMode});
    return <div className={classes}>
        <div className="page-header">
            <div>
                <AvatarHeader />
                <ContactHeader contactInfo={camScott2024.info} />
            </div>
            <PersonNameHeader name={camScott2024.info.name} />
        </div>

        <div className="page-content page-break">
            <MetaPane groups={camScott2024.groups} />
            <div className="main pane">
                <Profile profile={camScott2024.info} className="page-break" />
                <WorkHistory history={camScott2024.history} />
            </div>
        </div>
    </div>
}