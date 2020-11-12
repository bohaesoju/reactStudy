import React from 'react';
import useOnMounted from '../../CustomHook/useOnMounted';

const UseEffectApi2 = () => {
  const [data, setData] = React.useState([])
  const [name, setName] = React.useState('')
  const [inputValue, setInputValue] = React.useState(0)

  const fetchData = () => {
    console.log('execute fetchdata')
    fetch('https://jsonplaceholder.typicode.com/users', {})
    .then(res => res.json())
    .then(res => { setData(res)});
  }
  
  const handleChange = (e) => {
    setInputValue(Number(e.target.value))
  }

  useOnMounted(() => fetchData());
  // React.useEffect(() => {
  //   console.log('fetchData')
  //   fetchData();
  // }, [])

  React.useEffect(() => {
    if(data.length > 0){
      setName(data[inputValue].name)
    }
  }, [inputValue, data])

  return(
    <>
      <h1>API 호출</h1>
      <input 
        type="number"
        onChange={ handleChange }
        value={ inputValue }
      />
      <span>{ name }</span>
      <ul>
        { data.map((e) => {
          return <li key={ e.id }>{ e.name }</li>  
        })}
      </ul>
    </>
  )
}

export default UseEffectApi2;