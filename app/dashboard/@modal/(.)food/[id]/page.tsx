import FoodEditForm from "@/app/dashboard/_components/food-edit-form";
import { Modal } from "@/app/dashboard/_components/modal";

export default function FoodModal({
  params: { id: foodId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FoodEditForm />
    </Modal>
  );
}
