export default function BuffByIdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
