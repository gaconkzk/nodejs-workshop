

async function add(a, b) {
    return await Promise.resolve(a + b)
}

add(5, 7)
  .then(res => console.log(res))
  .catch(err => console.err(err))
