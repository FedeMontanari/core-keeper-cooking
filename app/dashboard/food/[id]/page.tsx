import FoodEditForm from "../../_components/food-edit-form";

export default function FoodByIdDashboardPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FoodEditForm />
    </div>
  );
}
