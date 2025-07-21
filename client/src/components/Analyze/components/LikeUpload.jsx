import React from 'react'

const LikeUpload = ({value,onChange}) => {
  return (
    <div className='mb-10'>
      <input type='link'   value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste there your linkdin link ..."
        className="w-full h-12 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none transition-colors duration-200"/>
    </div>
  )
}

export default LikeUpload
