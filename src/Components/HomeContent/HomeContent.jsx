import React from 'react';
import Card from '../cards/Card';

const HomeContent = ({contentTitle, mapContent}) => {
    return <section className="w-full lg:w-11/12 2xl:w-10/12 mx-auto px-4">
      <h2 className="text-center text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        {contentTitle}
      </h2>
      <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 2xl:gap-16 max-w-7xl mx-auto">
        {mapContent.map((card, index) => (
          <Card
          key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </section>
};

export default HomeContent;