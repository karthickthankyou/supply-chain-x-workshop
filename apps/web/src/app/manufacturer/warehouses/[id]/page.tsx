export default async function ManufacturerWarehousePage({
  params,
}: {
  params: { id: string }
}) {
  return <div>Hello {params.id}</div>
}
