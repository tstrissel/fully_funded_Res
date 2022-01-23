 import ResultModal from "../ResultModal/ResultModal";
 import { useState } from "react";

const Modal = ({
  title,
  slug,
  category,
  money,
  paragraph,
  thumbnail,
  fellowship,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const closeCard = () => {
    setIsVisible(false);
  };
  return (
    <>
      {""}
      <div>
        {title}
        <img src={thumbnail.fields.file.url} height="300px" width="350px" />
        <ul>
          <li>{slug}</li>
          <li>{category}</li>
          <li>location</li>
          <li>{money}</li>
        </ul>
        <p>{paragraph}</p>
        <button onClick={() => setIsCardOpen(true)}>Read more</button>

        <ResultModal
          fellowship={fellowship}
          trigger={isCardOpen}
          setTrigger={closeCard}
        >
          <img src={thumbnail.fields.file.url} height="300px" width="350px" />
          <h1>{slug}</h1>
          <h1>{title}</h1>
          <p>{category}</p>
          <p>{money}</p>
          <p>{paragraph}</p>
        </ResultModal>
      </div>
    </>
  );
};

export default Modal;
