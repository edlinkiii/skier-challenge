import "babel-polyfill";
import * as Constants from "../Constants";
import { Skier } from "../Entities/Skier";

test('true equals true', () => {
    expect(true).toBe(true);
});

test('skier can turn left after crash', () => {
    // instantiate skier
    const skier = new Skier();
    // simulate skier crash
    skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    // simulate press left arrow key
    skier.turnLeft();
    // skier should be facing left
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
});

test('skier can turn right after crash', () => {
    // instantiate skier
    const skier = new Skier();
    // simulate skier crash
    skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    // simulate press right arrow key
    skier.turnRight();
    // skier should be facing right
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
});
