import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        name="title"
        placeholder="Enter Title"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formBasicAuthor">
      <Form.Label>Author</Form.Label>
      <Form.Control
        type="text"
        name="author"
        placeholder="Author"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formBasicContent">
      <Form.Label>Content</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="content"
        placeholder="Content"
        onChange={handleChange}
      />
    </Form.Group>

    {/* <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Resolved" />
    </Form.Group> */}

    <Button
      variant="primary"
      type="submit"
    >
      Submit
    </Button>
  </Form>
)

export default PostForm