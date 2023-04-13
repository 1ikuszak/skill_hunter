'use client';

import Image from 'next/image';
import { useState } from 'react';
import defaultImg from '../../public/default_img.svg';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    defaultImg,
    defaultImg,
    defaultImg,
    defaultImg,
    defaultImg,
    defaultImg,
  ]);

  const handleFileInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prevState) => {
        const newState = [...prevState];
        newState[index] = url;
        return newState;
      });
    }
  };

  const GalleryImage = ({ index }: { index: number }) => (
    <div className="flex flex-1 transition duration-150 ease-in-out aspect-video bg-slate-100 hover:scale-[103%] hover:bg-slate-200">
      <label
        htmlFor={`galleryImageInput${index}`}
        className="relative block w-full h-full"
      >
        <Image
          fill
          src={images[index]}
          alt={`Gallery Image ${index}`}
          sizes="100vw"
          className="w-full h-auto"
        />
      </label>
      <input
        id={`galleryImageInput${index}`}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleFileInputChange(index, event)}
      />
    </div>
  );

  return (
    <div>
      <p className="text-base text-gray-700">Image</p>
      <p className="mb-1 text-sm text-gray-700">
        The first photo will be the main photo
      </p>
      <div className="flex gap-3">
        <div className="flex flex-col items-center justify-center flex-1 bg-light aspect-video">
          <GalleryImage index={0} key={0} />
        </div>
        <div className="flex flex-col flex-1 gap-2 aspect-video">
          <div className="flex flex-1 gap-2">
            {[1, 2].map((i) => (
              <GalleryImage index={i} key={i} />
            ))}
          </div>
          <div className="flex flex-1 gap-2">
            {[3, 4].map((i) => (
              <GalleryImage index={i} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Gallery };
