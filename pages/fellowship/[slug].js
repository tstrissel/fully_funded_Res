import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "fellowship",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "fellowship",
    "fields.slug": params.slug,
  });

  return {
    props: { fellowship: items[0] },
  };
}

export default function fellowshipDetails({ fellowship }) {
  const { title, slug, category, money, paragraph, thumbnail } =
    fellowship.fields;
  return (
    <div>
      <img src={thumbnail.fields.file.url} />
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{money}</p>
      <p>{paragraph}</p>
    </div>
  );
}
