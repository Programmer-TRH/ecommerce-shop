import ProductCard from '@/components/Common/ProductCard'
import Product from '@/lib/ProductData'
import React from 'react'

export default function WishList() {
  return (
    <>
     <div className='flex inset-center justify-between gap-gap mb-4'>
     <div className='flex items-center gap-1 '>
        <h3 className='text-[1.0625rem] font-semibold'> Wishlist</h3><span>({Product.length}) </span>
      </div>
      <button className='px-4 py-button-block rounded-sm border border-line bg-primary-black/5 hover:bg-line active:bg-line font-medium active:font-semibold hover:font-semibold'>Add All to Cart</button>
     </div>

      <div className='grid gap-8 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]'>
        {Product.map(product => (
          <ProductCard key={product.id} wishList="wishlist" product={product} />
        ))}
      </div>
    </>
  )
}
