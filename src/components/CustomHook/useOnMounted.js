import React from 'react';

const useOnMounted = (effect) => {
    React.useEffect(effect, [])
}

export default useOnMounted;