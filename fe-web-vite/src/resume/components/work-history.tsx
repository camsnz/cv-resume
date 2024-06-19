
import { Section } from "../../widget/Section";
import { JobTenure } from "../types";
import classNames from "classnames";
import { BlockHeader } from "./block-header";

type WorkHistoryProps = { history: JobTenure[] };
type JobTenureBlockProps = { job: JobTenure };

const JobTenureBlock = ({job}:JobTenureBlockProps) => <div className={classNames("job-tenure", {summary: job.summaryOnly})}>
    <BlockHeader title={job.title} subtitle={job.employer.name} period={{start: job.start, end: job.end}} />
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
