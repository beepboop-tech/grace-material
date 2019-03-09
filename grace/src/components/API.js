export function apiUrl(s) {
  return window.location.origin + s;
  //return 'http://localhost:5000' + s;
}

export function postJSON(s, obj) {
  const opts = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  };

  return fetch(apiUrl(s), opts);
}

export function getImageSearchJSON(searchTerm) {
  const search = apiUrl(`/api/images/${searchTerm}`);
  return fetch(search)
    .then(resp => resp.json());
}
