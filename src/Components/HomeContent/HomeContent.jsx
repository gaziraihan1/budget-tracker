import React from "react";
import Card from "../Shared/cards/Card";

const HomeContent = ({
  contentTitle,
  mapContent,
  bgColor,
  section,
  textColor,
}) => {
  return (
    <section
      id={section}
      className="w-full lg:w-11/12 2xl:w-10/12 mx-auto px-4"
    >
      <h2
        className={`text-center text-2xl lg:text-3xl 2xl:text-4xl font-bold ${textColor}`}
      >
        {contentTitle}
      </h2>

      <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-8 ">
        {mapContent.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeContent;
