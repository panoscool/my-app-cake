import { Photo } from "../_components/photo";
import photos from "../../data/photos.json";
import Link from "next/link";

export default function PhotosPage() {
  return (
    <div className="container mx-auto bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <Link href="/">Home</Link>
      <div className="flex flex-col items-center gap-8 py-8 ">
        <h1 className="font-bold text-3xl">Photos</h1>

        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
