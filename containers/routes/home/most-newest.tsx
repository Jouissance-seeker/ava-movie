import { Calendar } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { mostControversialData } from '@/resources/most-controversial';

export function MostNewest() {
  return (
    <section className="container flex flex-col gap-4">
      {/* head */}
      <div className="flex gap-3">
        <Calendar size={30} color="#fff" variant="TwoTone" />
        <p className="text-lg font-bold">جدیدترین ها</p>
      </div>
      {/* body */}
      <div className=" flex snap-x gap-4 overflow-x-auto scrollbar-hide">
        {mostControversialData.map((item) => (
          <Card data={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}

interface ICardProps {
  data: (typeof mostControversialData)[0];
}

const Card = (props: ICardProps) => {
  return (
    <Link
      href={props.data.href}
      key={props.data.title}
      className="flex h-fit snap-center flex-col gap-3 rounded-2xl bg-gray-900/80 px-4 pb-2 pt-4 transition-all hover:bg-gray-900"
    >
      <Image
        className="size-[150px] min-w-[150px] rounded-xl object-cover"
        src={props.data.image}
        alt={props.data.title}
        width={150}
        height={150}
      />
      <p className="text-center text-sm text-white/90">{props.data.title}</p>
      <p className="text-center text-xsp text-gray-500">{props.data.year}</p>
    </Link>
  );
};
