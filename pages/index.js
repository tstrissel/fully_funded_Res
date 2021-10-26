import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "artist" });

  return {
    props: {
      artist: res.items,
    },
  };
}

export default function Recipes({ artist }) {
  return (
    <div className="recipe-list">
      artist List
      {artist.map((artist) => (
        <div key={artist.sys.id}>
          {console.log(
            artist.fields.featuredImage.fields.file.url,
            "here is the thumbnail"
          )}
          {artist.fields.title}
          <img
            src={artist.fields.thumbnail.fields.file.url}
            height="300px"
            width="350px"
          />
          <img
            src={artist.fields.featuredImage.fields.file.url}
            height="300px"
            width="350px"
          />
        </div>
      ))}
    </div>
  );
}
