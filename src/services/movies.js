export const checkIsResponseOk = res => res.Response === 'True'

export const searchMovies = ({ query }) => {
  return window.fetch(`https://www.omdbapi.com/?s=${query}&i=${import.meta.env.VITE_API_ID}&apikey=${import.meta.env.VITE_API_KEY}`)
    .then(res => res.json())
    .then(response => {
      const resultsToStore = response.Response === 'True' ? response.Search : []
      return resultsToStore
    })
}
