import React from 'react';

const UseEffectApi = () => {
  const [data, setData] = React.useState([])
  const [name, setName] = React.useState('')
  const [inputValue, setInputValue] = React.useState(0)
  
  const handleChange = (e) => {
    setInputValue(Number(e.target.value))
  }

  React.useEffect(() => {
    console.log('fetchData')
    fetch('https://jsonplaceholder.typicode.com/users', {})
    .then(res => res.json())
    .then(res => { setData(res)});
  }, [])

  React.useEffect(() => {
    console.log('useEffect')
    if(data.length > 0){
      setName(data[inputValue].name)
    }
  })

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

export default UseEffectApi;