export default async function ManufacturerProductPage({
  params,
}: {
  params: { id: string }
}) {
  return <div>Hello {params.id}</div>
}
