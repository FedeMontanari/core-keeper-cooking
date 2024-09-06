export default function BuffModal({
  params: { id: foodId },
}: {
  params: { id: string };
}) {
  return <div>{foodId}</div>;
}
