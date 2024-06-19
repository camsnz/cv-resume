import classNames from "classnames";
import { EducationItem } from "../types";
import { BlockHeader } from "./block-header";

const EducationItemBlock = ({edu}:{edu:EducationItem}) => <div className={classNames("education-item")}>
    <BlockHeader title={edu.institution.name} subtitle={edu.title} period={edu} />
</div>;

type EducationProps = {
    education: EducationItem[];
    className?: string;
}

export const Education = ({education, className}: EducationProps) => {
    return <div className={classNames("education",className)}>
        <h2>Education</h2>
        {education.map((edu, idx) => <EducationItemBlock key={idx} edu={edu} />)}
    </div>;
}

