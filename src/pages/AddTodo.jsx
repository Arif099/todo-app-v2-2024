import { useContext, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "react-bootstrap"

export default function AddTodo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate()

  function addTodo(event) {
    event.preventDefault()
    setTodos([...todos, { id: Date.now(), title, description, completed }])
    navigate('/')
  }
  return (
    <Container>
      <h1 className="my-3">Add Todo</h1>

      {/* Title */}
      <Form onSubmit={addTodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Get software developer job"
            required
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as='textarea'
            rows={3}
            placeholder={`1. Eat\n2. Sleep\n3. Grow fat`}
            required
          />
        </Form.Group>

        {/* Checkbox */}
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
          className="mb-3"
        />

      </Form>
    </Container>
  )
}
