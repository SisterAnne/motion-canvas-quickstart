import { Circle, makeScene2D } from "@motion-canvas/2d";
import { createRef, createSignal, linear } from "@motion-canvas/core";

// * Definitions
const time = createSignal(0);
const timeLimit = 5;

// Sun and orbit configuration
const sun = {
    ref: createRef<Circle>(),
    radius: 140,
    orbit: {
        period: 1,
        radius: 1080 / 2,
        centroid: {
            x: 0,
            y: 1080 / 2,
        },
    },
};

// ===== Helper functions ======================================================

const sunXPos = createSignal(
    () => sun.orbit.centroid.x + sun.orbit.radius * Math.cos(time())
);

const sunYPos = createSignal(
    () => sun.orbit.centroid.y + sun.orbit.radius * Math.sin(time())
);

// ===== Driver code ===========================================================

export default makeScene2D(function* (view) {
    // * Scene hierarchy
    view.add(
        <>
            {/* Sun */}
            <Circle
                ref={sun.ref}
                height={sun.radius}
                width={sun.radius}
                x={sunXPos}
                y={sunYPos}
                fill="red"
            />
        </>
    );

    // * Generators
    yield* time(0, 0).to(Math.PI * 2, timeLimit, linear);
});
