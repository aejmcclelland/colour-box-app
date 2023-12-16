import ColourBox from "./ColourBox";
import "../src/ColourBoxGrid.css";
export default function ColourBoxGrid({ colours }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColourBox colours={colours} />);
    }
    return (
        <div className="ColourBoxGrid">
            {boxes}
        </div>
    )
}