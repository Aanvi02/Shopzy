import React from 'react'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {

  const {products, searchQuery} = useAppContext()
  const [filterProducts, sellFilteredProducts] = useState([])

  useEffect(() => {
    if(searchQuery.length > 0 ){
      setFilteredProducts(products.filter(
        product=> product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))} else {
        
      }
    })

  },[products, searchQuery])
  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items end w-max'>
        <p className='text-2xl font-medium uppercase'>All products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default AllProducts