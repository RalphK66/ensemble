import { Fade, Form, FormControl } from 'react-bootstrap'

const SearchBar = ({ searchTerm, setSearchTerm, clearSearch }) => {
  return (
    <div className='position-relative bg-secondary mx-3 mt-5 '>
      <Form.Group>
        <FormControl
          placeholder='Search OMDB'
          type='text'
          size='lg'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='pe-4  overflow-scroll '
        />
        <Fade in={!!searchTerm}>
          <div
            role='button'
            onClick={clearSearch}
            disabled={!!!searchTerm}
            className={`position-absolute top-50 end-0 translate-middle fs-3 text-danger me-3 my-auto`}>
            x
          </div>
        </Fade>
      </Form.Group>
    </div>
  )
}

export default SearchBar
