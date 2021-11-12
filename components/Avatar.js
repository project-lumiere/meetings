import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="p-0.5 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full hover:opacity-80 transition-opacity inline-block">
      <div className="p-0.5 bg-gray-900 rounded-full">
        <figure className="relative w-10 h-10 lg:w-9 lg:h-9">
          <Image
            src="/anthony.jpg"
            alt="Anthony Kuang"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </figure>
      </div>
    </div>
  );
}
