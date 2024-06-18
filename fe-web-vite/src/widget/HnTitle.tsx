import React from "react";
import { Bug } from "./Bug";

export type HnLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const HnLevelsMap:{[key:number]:HnLevels} = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
};
type HnTitleProps = { depth: number, children: string };
export const HnTitle = ({depth, children}:HnTitleProps) => {
    return HnLevelsMap[depth] ? React.createElement(HnLevelsMap[depth], {className:"title"}, children) :
    <Bug rf="HnLevelsMap" msg={`HnTitle depth is ${depth}, no level match`}/>;
}
