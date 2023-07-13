export default function isWithinBoundingBox(clickCoords, boundingBoxCoords) {
    const { x, y } = clickCoords;
    const { xmin, xmax, ymin, ymax } = boundingBoxCoords;

    return (x >= xmin && x <= xmax) && (y >= ymin && y <= ymax)
}