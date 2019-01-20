const defaultFilterFunc = (obj, value, filterTemplate) => {
  let target = ''
  
  if(filterTemplate.getTarget) {
    target = filterTemplate.getTarget(obj)
  }

  if(filterTemplate.target) {
    target = obj[filterTemplate.target]
  }

  const pattern = new RegExp(value, 'ig')

  return pattern.test(target.toString())
}

export default defaultFilterFunc