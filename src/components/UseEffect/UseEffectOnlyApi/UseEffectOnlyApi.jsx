import React from 'react';

const UseEffectOnlyApi = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log('fetchData')
    fetch('https://jsonplaceholder.typicode.com/users', {})
    .then(res => res.json())
    .then(res => { setData(res)});
  })
  // }, [])

  return(
    <>
      <h1>API 호출</h1>
      <ul>
        { data.map((e) => {
          return <li key={ e.id }>{ e.name }</li>  
        })}
      </ul>
    </>
  )
}

export default UseEffectOnlyApi;