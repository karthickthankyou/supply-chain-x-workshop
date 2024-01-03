import { MyProductsQuery } from '@foundation/network/src/queries/generated'
import { format } from 'date-fns'

export const ProductCard = ({
  product,
}: {
  product: MyProductsQuery['myProducts'][0]
}) => {
  const { name, image, createdAt, description } = product

  return (
    <div className="gap-4 mb-4 overflow-hidden border border-white rounded-lg shadow-xl">
      {image && (
        <img
          src={image}
          alt={name}
          className="object-cover w-full aspect-square"
        />
      )}
      <div className="flex flex-col justify-between p-4 bg-white/20">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span> {format(new Date(createdAt), 'PP')}</span>
        </div>
      </div>
    </div>
  )
}
