import { currentlyPlayingSong } from "../../lib/spotify";

export default async function handler(req, res) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}

// import { getNowPlaying } from "lib/spotify";

// export const config = {
//   runtime: "experimental-edge",
// };

// export default async function handler(req) {
//   const response = await getNowPlaying();

//   if (response.status === 204 || response.status > 400) {
//     return new Response(JSON.stringify({ isPlaying: false }), {
//       status: 200,
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//   }

//   const song = await response.json();

//   if (song.item === null) {
//     return new Response(JSON.stringify({ isPlaying: false }), {
//       status: 200,
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//   }

//   const isPlaying = song.is_playing;
//   const title = song.item.name;
//   const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
//   const album = song.item.album.name;
//   const albumImageUrl = song.item.album.images[0].url;
//   const songUrl = song.item.external_urls.spotify;

//   return new Response(
//     JSON.stringify({
//       album,
//       albumImageUrl,
//       artist,
//       isPlaying,
//       songUrl,
//       title,
//     }),
//     {
//       status: 200,
//       headers: {
//         "content-type": "application/json",
//         "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
//       },
//     }
//   );
// }
