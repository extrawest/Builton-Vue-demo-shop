const getPayload = body => {
  return {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
};

export function $post(path, body) {
  return new Promise((resolve, reject) => {
      return fetch(process.env.baseUrl + path, getPayload(body))
        .then(async res => {
          if (res.status === 200) resolve(await res.json());
          if (res.status === 400) reject(await res.json());
        })
    }
  )
}
