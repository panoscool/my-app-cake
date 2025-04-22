import Image from "next/image";
import Link from "next/link";

type Props = {
  photo: {
    id: string;
    title: string;
    src: string;
  };
};

export function Photo({ photo }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-8 mx-auto items-center">
      <Link href={`/photos/${photo.id}`} className="border-2 rounded-lg">
        <Image src={photo.src} alt={photo.title} width={420} height={420} className="rounded-lg" />
      </Link>

      <h1 className="text-3xl text-center">{photo.title}</h1>
    </div>
  );
}
