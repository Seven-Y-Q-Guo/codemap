const fetchJSON = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {"Authorization": `Bearer ${localStorage.getItem('codemapToken')}`}
    }).then(res => res.json()).then(res => {
      if (res.message === 'Not Found') reject('404');

      // cb(atob(res.content));
      resolve(res);
    }).catch(err => reject(err));
  });
};

export default fetchJSON;
