const [moo, neigh, baa, oink, cluck] = ["cow", "horse", "sheep", "pig", "chicken"];
const { bessie, dolly, babe, little } = { bessie: "cow", dolly: "sheep", babe: "pig", little: "chicken" };
const { blackAndWhite, black, pink } = { blackAndWhite: "cow", black: "sheep", pink: "pig" };
const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [r, o, y, g, b, v] = ["red", "orange", "yellow", "green", "blue", "violet"];
const { indg } = { indg: "indigo" };
const { muppetName, color, song, job, partner, songs: [, song2, , song4], nested: { job: nestedJob, partner: nestedPartner } } = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: ["The Rainbow Connection", "Moving Right Along", "I'm Going to Go Back There Someday", "I Hope That Something Better Comes Along"],
  nested: { job: "Host of The Muppet Show", partner: "Miss Piggy" }
};