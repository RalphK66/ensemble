import { Col, Row } from 'react-bootstrap'
import SearchResult from '../SearchResult'

const SearchResults = ({ results }) => {
  return (
    <Row className='gap-3 justify-content-center h-100 bg-transparent my-5 mx-2'>
      {results.map((media) => (
        <Col key={media.imdbID} className='d-flex justify-content-center bg-transparent'>
          <SearchResult media={media} />
        </Col>
      ))}
    </Row>
  )
}

export default SearchResults
