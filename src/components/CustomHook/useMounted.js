import React from 'react';

const useMounted = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);
    // setMounted(true);
  }, [])
  return mounted;
}

export default useMounted;