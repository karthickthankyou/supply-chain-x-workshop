import { Factory, Store, Warehouse } from 'lucide-react'
import { HeroLink } from '../molecules/HeroLink'
import Link from 'next/link'
import { buttonVariants } from '../../util/variants'

export const HeroBanner = () => {
  return (
    <div className="flex h-screen mt-32 ">
      <div>
        <h1 className="max-w-xl mb-4 text-5xl">
          Empowering Your <span className="">Supply Chain</span> Journey
        </h1>
        <p className="max-w-md mb-8 text-xl">
          Connect, collaborate, and optimize your supply chain with
          SupplyChainX.
        </p>
        <div className="flex gap-4 my-4">
          <HeroLink Icon={Factory} url={'/manufacturer'}>
            Manufacturer
          </HeroLink>
          <HeroLink Icon={Warehouse} url={'/distributor'}>
            Distributer
          </HeroLink>
          <HeroLink Icon={Store} url={'/retailer'}>
            Retailer
          </HeroLink>
        </div>
        <Link
          href="/register"
          className={buttonVariants({ variant: 'outline' })}
        >
          Register
        </Link>
      </div>
    </div>
  )
}
