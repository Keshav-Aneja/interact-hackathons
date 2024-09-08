import React from 'react';
import Image from 'next/image';
import { UserCircle } from '@phosphor-icons/react';
interface Props {
  image?: string;
  name?: string;
}
export const AvatarBox = ({ image, name }: Props) => {
  return (
    <div className="w-8 h-8 rounded-full border-[1px] border-[#aeaeae] p-[2px] flex items-center justify-center relative group cursor-pointer ">
      {image ? (
        <Image src={image} alt={name ?? ''} width={75} height={75} />
      ) : (
        <UserCircle size={36} weight="fill" className="text-primary_black/30" />
      )}
      {name && (
        <span className="bg-primary_text text-white font-medium text-xs rounded-md absolute left-1/2 -translate-x-1/2 top-9 hidden group-hover:block px-3 py-1 text-nowrap ">
          {name}
        </span>
      )}
    </div>
  );
};
