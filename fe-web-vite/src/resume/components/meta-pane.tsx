import { useState } from "react";
import { DocSection } from "../types";
import classNames from "classnames";
import { Section } from "../../widget/Section";

type MetaPaneProps = { groups: DocSection[] };
export const MetaPane = ({groups}:MetaPaneProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const toggFocus = () => setIsFocused(!isFocused);
    return <div className={classNames("meta pane isFocusable",{isFocused})} onClick={toggFocus}>
        {groups.map((group, n) => <Section key={n} section={{...group, depth:4}} />)}
    </div>;
}
