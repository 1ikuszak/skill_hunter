'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import { Icons } from './icons';

interface CardProps {
  author: string;
  title: string;
  image: StaticImageData;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  isFavorite: boolean;
  onFavoriteClick?: () => void;
}

const Card: FC<CardProps> = ({
  title,
  author,
  image,
  description,
  rating,
  reviews,
  price,
  isFavorite,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-white rounded shadow-md md:max-w-md">
      <div className="flex-col">
        <div className="">
          <Image
            className="object-cover w-full transition duration-300 ease-in-out aspect-video hover:scale-105 hover:opacity-90"
            src={image}
            alt={`${image}`}
          />
        </div>
        <div className="pt-4 pl-4 pr-4">
          <div className="flex gap-3 mb-1 align-center">
            <div className="w-6 h-6 bg-blue-400 rounded-full" />
            <p className="font-semibold text-md">{author}</p>
          </div>
          <div className="text-xl font-semibold tracking-wide">{title}</div>
          <p className="text-sm text-gray-700">{description}</p>
          <div className="flex items-center mt-3">
            <div className="flex">
              <Icons.star size={18} />
            </div>
            <div className="ml-2 text-sm text-gray-600">{rating}/5</div>
            <div className="ml-2 text-sm text-gray-400">({reviews})</div>
          </div>
        </div>
        <hr className="h-px my-3 border-0 bg-neutral-300" />
        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex items-center">
            <button className="mr-4" onClick={handleFavoriteClick}>
              {favorite ? (
                <Icons.heart className="fill-black" size={18} />
              ) : (
                <Icons.heart size={20} />
              )}
            </button>
          </div>
          <div className="text-base font-semibold">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
