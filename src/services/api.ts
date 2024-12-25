// const API_KEY = "4866f46546mshf7c7a9f018e57c8p1ac215jsnd22ee905696d";
// const URL =
//   "https://imdb8.p.rapidapi.com/v2/search-advance?country=US&language=en-US";

// export const getMovies = async () => {

// }

// const url =
//   "https://imdb8.p.rapidapi.com/v2/search-advance?country=US&language=en-US";
// const options = {
//   method: "POST",
//   headers: {
//     "x-rapidapi-key": "4866f46546mshf7c7a9f018e57c8p1ac215jsnd22ee905696d",
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "Content-Type": "application/json",
//   },
//   // Step 1: Convert the body to a JSON string
//   body: JSON.stringify({
//     first: 100,
//     after: "",
//     includeReleaseDates: false,
//     sort: {
//       sortBy: "USER_RATING_COUNT",
//       sortOrder: "DESC",
//     },
//     allEventNominations: [
//       {
//         eventId: "ev0000003",
//         winnerFilter: "NON_WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000003",
//         searchAwardCategoryId: "bestPicture",
//         winnerFilter: "NON_WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000003",
//         searchAwardCategoryId: "bestDirector",
//         winnerFilter: "NON_WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000292",
//         winnerFilter: "NON_WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000223",
//         winnerFilter: "NON_WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000003",
//         winnerFilter: "WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000292",
//         winnerFilter: "WINNER_ONLY",
//       },
//       {
//         eventId: "ev0000223",
//         winnerFilter: "WINNER_ONLY",
//       },
//     ],
//     allGenreIds: [
//       "Comedy",
//       "Horror",
//       "Romance",
//       "Thriller",
//       "Sci-Fi",
//       "Drama",
//       "Action",
//       "Adventure",
//       "Animation",
//       "Biography",
//       "Crime",
//       "Documentary",
//       "Family",
//       "Fantasy",
//       "Film-Noir",
//       "Game-Show",
//       "History",
//       "Music",
//       "Musical",
//       "Mystery",
//       "Mews",
//       "Reality-Tv",
//       "Sport",
//       "Talk-Show",
//       "War",
//       "Western",
//     ],
//     anyPrimaryLanguages: ["en", "fr"],
//     anyPrimaryCountries: ["CA", "FR", "US"],
//     allKeywords: [
//       "action-hero",
//       "alien-invasion",
//       "alternate-history",
//       "anime",
//       "anti-hero",
//       "avant-garde",
//       "b-movie",
//       "bank-robbery",
//       "based-on-book",
//       "based-on-comic-book",
//       "based-on-novel",
//       "based-on-play",
//       "based-on-true-story",
//       "bechdel-test-passed",
//       "black-comedy",
//       "bollywood",
//       "caper",
//       "chick-flick",
//       "coming-of-age",
//       "conspiracy",
//       "criminal-mastermind",
//       "cult-film",
//       "cyberpunk",
//       "dark-fantasy",
//       "dc-comics",
//       "dystopia",
//       "epic",
//       "espionage",
//       "experimental-film",
//       "f-rated",
//       "fairy-tale",
//       "femme-fatale",
//       "futuristic",
//       "good-versus-evil",
//       "haunting",
//       "heist",
//       "high-school",
//       "independent-film",
//       "kidnapping",
//       "kung-fu",
//       "lgbtq",
//       "magical-realism",
//       "marvel-comics",
//       "mockumentary",
//       "monster",
//       "on-the-run",
//       "one-man-army",
//       "parallel-world",
//       "paranormal-phenomenon",
//       "parenthood",
//       "parody",
//       "police-detective",
//       "post-apocalypse",
//       "postmodern",
//       "redemption",
//       "rescue",
//       "road-movie",
//       "robbery",
//       "satire",
//       "sequel",
//       "space-travel",
//       "spaghetti-western",
//       "spoof",
//       "steampunk",
//       "superhero",
//       "supernatural-power",
//       "swashbuckler",
//       "time-travel",
//       "triple-f-rated",
//       "vampire",
//       "zombie",
//     ],
//     releaseDateRange: {
//       end: "2009-12-31",
//       start: "2000-01-01",
//     },
//     runtimeRangeMinutes: {
//       max: 99999,
//       min: 240,
//     },
//     anyTitleTypeIds: [
//       "movie",
//       "tvSeries",
//       "short",
//       "tvEpisode",
//       "tvMiniSeries",
//       "tvMovie",
//       "tvSpecial",
//       "tvShort",
//       "videoGame",
//       "video",
//       "musicVideo",
//       "podcastSeries",
//       "podcastEpisode",
//     ],
//     aggregateRatingRange: { min: 7 },
//     ratingsCountRange: { min: 10000 },
//     anyWatchProviderIds: [
//       "amzn1.imdb.w2w.provider.prime_video.PRIME",
//       "amzn1.imdb.w2w.provider.prime_video",
//       "amzn1.imdb.w2w.provider.prime_video.freevee",
//     ],
//   }),
// };

// try {
//   const response = await fetch(url, options);

//   // Check if the response is successful (status 200)
//   if (response.ok) {
//     const result = await response.json(); // Use .json() to parse the response
//     console.log(result); // Log the parsed result
//   } else {
//     console.error("Error: ", response.statusText); // Handle unsuccessful responses
//   }
// } catch (error) {
//   console.error("Request failed:", error); // Catch and log any errors
// }

const url =
  "https://imdb8.p.rapidapi.com/v2/search-advance?country=US&language=en-US";

try {
  const response = await fetch(url); // Send the GET request

  if (response.ok) {
    // Check if the response is successful
    const result = await response.json(); // Parse the JSON response
    console.log(result); // Log the result to the console
  } else {
    console.error("Error:", response.statusText); // Handle errors if the response isn't OK
  }
} catch (error) {
  console.error("Request failed:", error); // Catch and log any errors from the fetch request
}
