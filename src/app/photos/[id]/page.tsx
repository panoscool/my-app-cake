import Link from "next/link";
import photos from "../../../data/photos.json";
import { Photo } from "../../_components/photo";

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = photos.find((photo) => photo.id === id);

  if (!photo) return <h1>Photo not found</h1>;

  return (
    <div className="container">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/photos">Photos</Link>
      </div>

      <div className="mt-2 grid place-content-center">
        <h1 className="text-center mt-4 mb-8">Photo {id}</h1>

        <Photo photo={photo} />
      </div>
    </div>
  );
}
