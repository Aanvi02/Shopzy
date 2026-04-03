import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories } from '../assets/assets'

const ProductCategory = () => {

  const { products } = useAppContext()
  const { category } = useParams()

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  )

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  )

  return (
    <div className='mt-16'>

      {/* Heading */}
      {searchCategory && (
        <div className='flex flex-col items-start mb-6'>
          <p className='text-2xl font-medium'>
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

    </div>
  )
}

export default ProductCategory