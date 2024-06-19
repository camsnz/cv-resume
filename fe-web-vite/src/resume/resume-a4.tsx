import classNames from "classnames";

import {PersonalInfo} from "./types";
import {camScott2024} from "../data/cam-scott-2024";

import "./resume.scss"
import { Section } from "../widget/Section";
import { WorkHistory } from "./components/work-history";
import { MetaPane } from "./components/meta-pane";
import { PageHeader } from "./components/page-header";
import { Education } from "./components/education";

type ProfileProps = { profile: PersonalInfo, className?: string };
const Profile = ({profile, className}:ProfileProps) => {
    return <div className={classNames("profile",className)}>
        {profile.sections.map((section, n) =>
            <Section key={n} className="profile-item" section={{...section, depth: 3}} />
        )}
    </div>
}

type ResumeProps = { isPrintMode?: boolean };
export const Resume = ({isPrintMode=false}:ResumeProps) => {
    const classes = classNames("resumeDocument", {isPrintMode});
    return <div className={classes}>
        <PageHeader profile={camScott2024} />

        <div className="page-content">
            <MetaPane groups={camScott2024.groups} />
            <div className="main pane">
                <Profile profile={camScott2024.info} />
                <Education education={camScott2024.education} className="page-break" />
                <WorkHistory history={camScott2024.history} />
            </div>
        </div>
    </div>
}