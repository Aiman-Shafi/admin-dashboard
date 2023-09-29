import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardsItemOne from "@/components/cards/CardsItemOne";
import CardsItemTwo from "@/components/cards/CardsItemTwo";
import CardsItemThree from "@/components/cards/CardsItemThree";

const cardsItemOneData = [
  {
    imageSrc: "/images/user/user-11.png",
    name: "Naimur Rahman",
    role: "Content Writer",
    cardImageSrc: "/images/cards/cards-01.png",
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    imageSrc: "/images/user/user-12.png",
    name: "Musharof Chy",
    role: "Web Developer",
    cardImageSrc: "/images/cards/cards-02.png",
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    imageSrc: "/images/user/user-13.png",
    name: "Shafiq Hammad",
    role: "Front-end Developer",
    cardImageSrc: "/images/cards/cards-03.png",
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
];

const cardsItemTwoData = [
  {
    cardImageSrc: "/images/cards/cards-04.png",
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    cardImageSrc: "/images/cards/cards-05.png",
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    cardImageSrc: "/images/cards/cards-06.png",
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
];

const cardsItemThreeData = [
  {
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
  {
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
  {
    cardTitle: "Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
];

const Cards: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Cards" />

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {cardsItemOneData.map((card, key) => (
          <CardsItemOne
            key={key}
            imageSrc={card.imageSrc}
            name={card.name}
            role={card.role}
            cardImageSrc={card.cardImageSrc}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
          />
        ))}
      </div>

      <h2 className="mt-10 mb-7.5 text-title-md2 font-semibold text-black dark:text-white">
        Cards
      </h2>

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {cardsItemTwoData.map((card, key) => (
          <CardsItemTwo
            key={key}
            cardImageSrc={card.cardImageSrc}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
          />
        ))}
      </div>

      <h2 className="mt-10 mb-7.5 text-title-md2 font-semibold text-black dark:text-white">
        Cards
      </h2>

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {cardsItemThreeData.map((card, key) => (
          <CardsItemThree
            key={key}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
