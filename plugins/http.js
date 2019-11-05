export async function $post(path, body) {
  return fetch(path, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
}

export async function $get(path) {
  return fetch(path)
    .then(res => res.json())
}
