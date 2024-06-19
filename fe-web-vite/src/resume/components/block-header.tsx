import * as dfns from "date-fns";

const fmtJobDate = (date:string) => dfns.format(date, "LLL y")

type TimePeriod = {
    start: string;
    end: string;
}
type BlockHeaderProps = {
    title: string;
    subtitle: string;
    period: TimePeriod;
}

export const BlockHeader = ({title, subtitle, period}:BlockHeaderProps) => <div className="block-header">
    <div className="title">
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
    </div>
    <div className="time-period">
        <span className="start">{fmtJobDate(period.start)}</span> - <span className="end">{fmtJobDate(period.end)}</span>
    </div>
</div>
