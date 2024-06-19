import classNames from "classnames";
import { useState } from "react";
import { PersonalInfo, Profile2024 } from "../types";

import avatarImg from "_src/avatar.jpeg";

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

    const {address,email,github,linkedin,phone,} = contactInfo.contact;
    return <div className={classes} onClick={toggFocus}>
        {/* <h4 className="person-name focus-only">{contactInfo.name}</h4> */}
        <div className="content">
            <ul>
                <li><label>L</label><span className="value" aria-description="Location">{address}</span></li>
                <li><label>P</label><span className="value" aria-description="Phone Number">{phone}</span></li>
                <li><label>E</label><span className="value" aria-description="Email">{email}</span></li>
                {/* <li><label>W</label><span className="value" aria-description="Website"><a href={`https://${website}`}>{website}</a></span></li> */}
                <li><label>W</label><span className="value" aria-description="LinkedIn"><a href={`https://linkedin.com/in/${linkedin}`}>{linkedin} (linkedin)</a></span></li>
                  <li><label></label><span className="value" aria-description="Github"><a href={`https://github.com/${github}`}>{github} (github)</a></span></li>
            </ul>
        </div>
        <div className="bg-facade" />
    </div>;
}

export const PageHeader = ({profile}:{profile:Profile2024}) => {
    return <div className="page-header">
        <div>
            <AvatarHeader />
            <ContactHeader contactInfo={profile.info} />
        </div>
        <PersonNameHeader name={profile.info.name} />
    </div>
}

