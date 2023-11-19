import React from 'react'

function Input({id,name,value,title,type,handelData,errors}) {
  return (
    <div className="col-md-12">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} className="form-control" value={value} name={name} id={id} onChange={handelData} />
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}

export default Input