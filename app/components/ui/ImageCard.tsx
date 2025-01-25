import React from 'react';

interface ImageCardProps {
  imageSrc: string;
  text: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, text }) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: '295px',
        height: '262px',
        gap: '16px',
      }}
    >
      <img
        src={imageSrc}
        alt={text}
        style={{
          width: '295px',
          height: '221px',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
      <p
        style={{
          fontFamily: 'Instrument Sans',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '24.4px',
          textAlign: 'center',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
          color: '#006400',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ImageCard;
