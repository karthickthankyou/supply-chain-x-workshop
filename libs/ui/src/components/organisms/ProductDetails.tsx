import { ProductQuery } from '@foundation/network/src/queries/generated'
import { format } from 'date-fns'
import { Description, Title } from '../atoms/typography'

export const ProductDetails = ({
  product,
}: {
  product: ProductQuery['product']
}) => {
  return (
    <div>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Description>{format(new Date(product.createdAt), 'PPp')}</Description>
    </div>
  )
}
