import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
const App = () => {
  const [results, setResults] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const clear = () => {
    setResults(null)
    setSearchTerm('')
    setError('')
    setMessage('')
  }

  const getSearchResults = useCallback(async () => {
    setError('')
    setMessage('')
    try {
      setLoading(true)
      const { data } = await axios.get(`${import.meta.env.VITE_OMDB_BASE_URL}&s=${searchTerm}`)
      if (data.Response === 'True') {
        setResults(data.Search)
      } else {
        setResults(null)
        setMessage('No matches found...')
      }
    } catch (error) {
      console.log(error)
      setError('Oops, something went wrong...')
    }
    setLoading(false)
  }, [searchTerm])

  useEffect(() => {
    const length = searchTerm?.length
    if (length === 0) {
      setMessage('')
    } else if (length > 0 && length < 3) {
      setResults('')
      setMessage('You must enter at least 3 characters...')
    } else {
      getSearchResults()
    }
  }, [getSearchResults, searchTerm])

  return (
    <Layout>
      {loading ? (
        <div className='position-absolute top-50 start-50 translate-middle'>
          <Spinner variant='light' role='status' animation='border' />
        </div>
      ) : null}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} clearSearch={clear} />
      <div className='my-2 ms-3'>
        {error ? <div className='text-danger'>{error}</div> : null}
        {message ? <div className='text-info'>{message}</div> : null}
      </div>

      {results ? <SearchResults results={results} /> : null }
    </Layout>
  )
}

export default App
