import { ProductQuery } from '@foundation/network/src/queries/generated'
import { format } from 'date-fns'
import { Description, Title } from '../atoms/typography'
import Image from 'next/image'

export const ProductDetails = ({
  product,
}: {
  product: ProductQuery['product']
}) => {
  return (
    <div>
      <Image
        src={product.image || '/no-image.jpeg'}
        alt=""
        width={300}
        height={300}
        className="object-cover w-40 h-40 mb-4 rounded-lg shadow-lg"
      />
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Description>{format(new Date(product.createdAt), 'PPp')}</Description>
    </div>
  )
}
