import React from 'react';

interface CardProps {
  image: string;
  title: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ image, title, paragraph }) => {
  return (
    <div
      className="shadow-md rounded-2xl flex flex-col items-center"
      style={{
        width: '390px',
        height: '446px',
        padding: '24px 0px 0px 0px',
        gap: '16px',
        backgroundColor: '#EFEFEF',
      }}
    >
      <img
        src={image}
        alt="Card Image"
        style={{
          width: '342px',
          height: '221px',
          borderRadius: '8px',
        }}
      />
      <div className="p-4 text-black text-center">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="mt-2">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
