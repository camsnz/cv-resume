import * as dfns from "date-fns";

import { Section } from "../../widget/Section";
import { JobTenure } from "../types";
import classNames from "classnames";

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
</div>;

export const WorkHistory = ({history}:WorkHistoryProps) => <div className="work-history">
    <h2>Experience</h2>
    {history.map((job, n) => {
        return <div key={n} className="JobTenure">
                <JobTenureBlock job={job} />
            </div>
        }
    )}
</div>;
