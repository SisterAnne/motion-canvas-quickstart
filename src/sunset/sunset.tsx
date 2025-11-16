import { Circle, makeScene2D } from "@motion-canvas/2d";
import { createRef, Reference, ThreadGenerator } from "@motion-canvas/core";

// ===== Sun orbit =============================================================

interface Sun {
    ref: Reference<Circle>;
    radius: number;
    orbit: {
        radius: number;
    };
}

function* orbitSun(sun: Sun): ThreadGenerator {}

// ===== Driver code ===========================================================

export default makeScene2D(function* (view) {
    // * Definitions

    const sun: Sun = {
        ref: createRef<Circle>(),
        radius: 140,
        orbit: {
            radius: 500,
        },
    };

    // * Scene hierarchy
    view.add(
        <>
            {/* Sun */}
            <Circle
                ref={sun.ref}
                height={sun.radius}
                width={sun.radius}
                x={sun.orbit.radius}
                y={0}
                fill="Red"
            />
        </>
    );

    // * Generators
    yield* orbitSun(sun);
});
