import { Photo } from "@/app/_components/photo";
import photos from "../../../../data/photos.json";
import { Modal } from "@/components/modal";

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = photos.find((photo) => photo.id === id);

  if (!photo) return <h1>Photo not found</h1>;

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}
