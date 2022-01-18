// import { createClient } from "contentful";
// import Image from "next/image";
// import ResultModal from "../../components/resultModal/ResultModal";
// import React, { useState } from "react";
// import GridComp from "../../components/gridComp/gridComp";

// const client = createClient({
//   space: process.env.SPACE_ID,
//   accessToken: process.env.ACCESS_TOKEN,
// });

// export const getStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type: "fellowship",
//   });

//   const paths = res.items.map((item) => {
//     return {
//       params: { slug: item.fields.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getStaticProps({ params }) {
//   const { items } = await client.getEntries({
//     content_type: "fellowship",
//     "fields.slug": params.slug,
//   });

//   return {
//     props: { fellowship: items[0] },
//   };
// }

// export default function fellowshipDetails({ fellowship }) {
//   const [buttonPopup, setButtonPopup] = useState(false);

//   const { title, slug, category, money, paragraph, thumbnail } =
//     fellowship.fields;

//   return (
//     <div>

//       <button onClick={() => setButtonPopup(true)}>Read more</button>

//       <ResultModal trigger={buttonPopup} setTrigger={setButtonPopup}>
//         <img src={thumbnail.fields.file.url} height="300px" width="350px" />

//         <h1>{title}</h1>
//         <p>{category}</p>
//         <p>{money}</p>
//         <p>{paragraph}</p>
//       </ResultModal>
//     </div>
//   );
// }
