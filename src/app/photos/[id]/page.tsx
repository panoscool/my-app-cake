import photos from "../../../data/photos.json";
import { Photo } from "../../_components/photo";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo = photos.find((photo) => photo.id === params.id);

  if (!photo) return <h1>Photo not found</h1>;

  return (
    <div className="mt-2 grid place-content-center">
      <h1 className="text-center mt-4 mb-8">Photo {params.id}</h1>

      <Photo photo={photo} />
    </div>
  );
}
