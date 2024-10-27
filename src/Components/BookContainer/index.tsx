import { useState } from 'react'
import { Book } from '../Book'
import { v4 as uuidv4 } from 'uuid'
import {
  Button,
  CloseButton,
  Input,
  Main,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles'

interface IbookContainer {
  id: string
  title: string
  author: string
  publication: string
  description: string
  registrationDate: string
}

export function BookContainer() {
  const [books, setBooks] = useState<IbookContainer[]>([
    {
      id: uuidv4(),
      title: 'Titulo exemplo ',
      author: 'Autor exemplo',
      publication: '20/10/2023',
      description:
        'Esse livro foi feito como base pra criação de outros livros, como exemplo.',
      registrationDate: '26/10/2024',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newBook, setNewBook] = useState({
    id: '',
    title: '',
    author: '',
    publication: '',
    description: '',
  })

  const [editBookId, setEditBookId] = useState<string | null>(null)

  function handleAddNewBook() {
    const currentDate = '26/10/2024'

    const [day, month, year] = newBook.publication.split('/').map(Number)
    const publication = new Date(year, month - 1, day)
    const today = new Date(2024, 9, 26)

    if (publication > today) {
      alert('A data de publicação não pode ser no futuro.')
      return
    }

    const bookToAdd: IbookContainer = {
      id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      publication: newBook.publication,
      description: newBook.description,
      registrationDate: currentDate,
    }

    setBooks([...books, bookToAdd])
    resetModal()
  }

  function resetModal() {
    setIsModalOpen(false)
    setNewBook({
      id: '',
      title: '',
      author: '',
      publication: '',
      description: '',
    })
    setEditBookId(null)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setNewBook((prev) => ({ ...prev, [name]: value }))
  }

  function handleDeleteBook(bookId: string) {
    setBooks(books.filter((book) => book.id !== bookId))
  }

  function handleEditBook(id: string) {
    const bookToEdit = books.find((book) => book.id === id)
    if (bookToEdit) {
      setNewBook(bookToEdit)
      setEditBookId(id)
      setIsModalOpen(true)
    }
  }

  function handleSaveEdit() {
    const updatedBooks = books.map((book) => {
      if (book.id === editBookId) {
        return { ...book, ...newBook }
      }
      return book
    })

    setBooks(updatedBooks)
    resetModal()
  }

  return (
    <Main>
      <Button
        onClick={() => {
          setIsModalOpen(true)
          setEditBookId(null)
        }}
      >
        Adicionar
      </Button>

      {isModalOpen && (
        <ModalContainer>
          <ModalOverlay>
            <ModalContent>
              <h2>{editBookId ? 'Editar Livro' : 'Adicionar Novo Livro'}</h2>
              <Input
                name="title"
                placeholder="Título"
                value={newBook.title}
                onChange={handleInputChange}
              />
              <Input
                name="author"
                placeholder="Autor"
                value={newBook.author}
                onChange={handleInputChange}
              />
              <Input
                name="publication"
                placeholder="Data de Publicação (dd/mm/aaaa)"
                value={newBook.publication}
                onChange={handleInputChange}
              />
              <Input
                name="description"
                placeholder="Descrição"
                value={newBook.description}
                onChange={handleInputChange}
              />
              <Button onClick={editBookId ? handleSaveEdit : handleAddNewBook}>
                {editBookId ? 'Salvar Alterações' : 'Salvar'}
              </Button>
              <CloseButton onClick={resetModal}>Cancelar</CloseButton>
            </ModalContent>
          </ModalOverlay>
        </ModalContainer>
      )}

      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          publication={book.publication}
          description={book.description}
          registrationDate={book.registrationDate}
          onDelete={() => handleDeleteBook(book.id)}
          onEdit={() => handleEditBook(book.id)}
        />
      ))}
    </Main>
  )
}
