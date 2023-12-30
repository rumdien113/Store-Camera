import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { FiX } from 'react-icons/fi'
const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch('/categories')

  return (
    <div className='w-full md:w-1/3 h-full bg-primary p-8'>
      <div
        onClick={() => setCatNavMobile(false)}
        className='flex justify-end mb-8 cursor-pointer'
      >
        <FiX className='text-3xl'/>
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((category => {
          return (
            <div key={category.id} onClick={() => setCatNavMobile(false)}>
              <Link
                to={`/products/${category.id}`}
                className='font-medium uppercase'
              >
                {category.attributes.title}
              </Link>
            </div>
          )
        }))}
      </div>
    </div>
  )
}

export default CategoryNavMobile
