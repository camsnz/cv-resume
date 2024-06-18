import { camScott2024 } from "./cam-scott-2024";
import { format, subDays } from "date-fns";

const fmt = (d:Date) => format(d, "LLL y")

describe("cv data", () => {

    it("should have the correct name", () => {
        expect(camScott2024.info.name).toBe("Cam Scott");
    });

    describe("work history", () => {
        it("should have consecutive dates", () => {
            const history = camScott2024.history;
            if(history.length == 0) return;

            let prevEnd = new Date(0);
            history.reverse().forEach((job, idx) => {
                const start = new Date(job.start);
                const end = new Date(job.end);

                try {
                    // needs jest msgs workaround
                    expect(prevEnd < start).toBe(true);
                    expect(start < end).toBe(true);
                } catch (e) {
                    throw new Error(`JobTenure dates are not consecutive: ${idx} ${job.employer.id} [${fmt(prevEnd)}] - ${fmt(start)} - ${fmt(end)}`)
                }

                prevEnd = subDays(end, 1);
            });
        })

    })

});