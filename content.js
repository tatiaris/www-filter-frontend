const pageHtml = document.getElementsByTagName('html')[0].innerHTML
const url = window.location.href

const backendUrl = 'http://localhost:8000'
// const backendUrl = 'http://'

const getFilteredPage = async () => {
  await fetch(backendUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      pageUrl: url,
      pageHtml: pageHtml
    })
  }).then(res => res.json()).then(data => {
    console.log('res data: ', data)
    document.getElementsByTagName('html')[0].innerHTML = data.newHtml
  }).catch(err => {
    console.log(err);
  })
}

getFilteredPage()

if (url == "https://tatiaris.com/p/compass") {
  window.location.replace('https://google.com')
}