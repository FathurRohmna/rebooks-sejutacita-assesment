import Image from 'next/image'

export function AuthorSourceBook({ profile, badge, name, country, position }) {
  return (
    <div className="flex items-center">
      <div className="responsive">
        <div className="relative w-20 h-20">
          <Image
            className="rounded-full"
            src={profile}
            alt="Profile"
            layout="responsive"
            width={40}
            height={40}
          />
          <div className="absolute top-0 -left-2">
            <div className="w-6 h-6 items-center justify-center flex text-xs font-bold bg-gray-600 text-white leading-none rounded-full">
              <span>{badge}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-8 text-gray-600">
        <p className="text-xl font-bold">{name}</p>
        <span className="block my-1">{country}</span>
        <q className="italic text-gray-500 max-w-xs md:w-full">
          {position}
        </q>
      </div>
    </div>
  );
}
