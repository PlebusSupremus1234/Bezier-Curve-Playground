function inRange(value, point, threshold) {
    return value >= (point - threshold / 2) && value <= (point + threshold / 2);
}