

const goFetch = () => {
    return fetch('http://localhost:3001/items')
    .then(response => response.json())
    .catch(err => console.log(err))

}

export {goFetch}