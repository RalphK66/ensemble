import { Button, Card } from 'react-bootstrap'
import Placeholder from '../../assets/images/No-Image-Placeholder.svg'
const SearchResult = ({ media }) => {
  return (
    <Card bg='dark' text='light' style={{ width: '12rem', height: '100%' }} align='center'>
      <Card.Img
        variant='top'
        src={media.Poster !== 'N/A' ? media.Poster : Placeholder}
        alt='poster'
        className='my-auto'
      />
      <Card.Body align='top'>
        <Card.Title className='fs-5'>
          {media.Title} <span className='fs-6 fw-lighter'> ({media.Year}) </span>
        </Card.Title>
      </Card.Body>

      <Card.Footer align='center'>
        <Button onClick={() => {}} variant='secondary'>
          Label
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default SearchResult
