import classNames from "classnames";
import { DocSection } from "../resume/types";
import { HnTitle } from "./HnTitle";

type SectionProps = { section: DocSection, className?: string };
export const Section = ({section, className}:SectionProps) => {
    const show = section.content && section.content.length > 0;
    return !show ? <></> : <div className={classNames("section", className)}>
        { section.title && <HnTitle depth={section.depth||4}>{section.title}</HnTitle> }
        { section.content && <ul>
            { section.content.map((content, n) => <li key={n}>{content}</li>) }
        </ul> }
    </div>;
}

