import { Photo } from "@/app/_components/photo";
import photos from "../../../../data/photos.json";
import { Modal } from "@/components/modal";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo = photos.find((photo) => photo.id === params.id);

  if (!photo) return <h1>Photo not found</h1>;

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}
