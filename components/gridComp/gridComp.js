export default function GridComp({ artist }) {
//   console.log(artist, "ARTIST HERE");
  return (
    <div>
      Artist List
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
