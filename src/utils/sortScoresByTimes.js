export default function sortScoresByTimes(set) {
    // Sort a set of level scores by times object, which has properties of hr, min, sec
    return set.sort((a, b) => (Number(a.time.sec) + Number(a.time.min * 60) + Number(a.time.hr) * 3600) - (Number(b.time.sec) + Number(b.time.min * 60) + Number(b.time.hr) * 3600));
}