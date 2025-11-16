import { makeProject } from "@motion-canvas/core";
import sunset from "./sunset/sunset?scene";

// import ball from "./samples/ball?scene";
// import cardinal from "./samples/cardinal?scene";
// import circlearea from "./samples/circlearea?scene";
// import flicker from "./samples/flicker?scene";
// import looping from "./samples/looping?scene";
// import querying from "./samples/querying?scene";

export default makeProject({
    // scenes: [ball, flicker, looping, querying, cardinal, circlearea],
    scenes: [sunset],
});
