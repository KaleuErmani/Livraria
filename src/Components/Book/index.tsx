import { useState } from 'react'
import { Button } from '../BookContainer/styles'
import {
  Container,
  ShowDetails,
  Span,
  SpanDescription,
  Title,
  TitleContainer,
} from './style'

interface BookProps {
  title: string
  author: string
  publication: string
  description: string
  registrationDate: string
  onDelete: () => void
  onEdit: () => void
}

export function Book({
  title,
  author,
  publication,
  description,
  registrationDate,
  onDelete,
  onEdit,
}: BookProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDetails = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <>
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Span>{author}</Span>
        <Span>{publication}</Span>
        <Span>{registrationDate}</Span>

        <Button onClick={toggleDetails}>
          {isExpanded ? 'Ocultar detalhes' : 'Mostrar detalhes'}
        </Button>

        {isExpanded && (
          <>
            <SpanDescription>{description}</SpanDescription>
            <ShowDetails>
              <Button onClick={() => onEdit()}>Editar</Button>
              <Button onClick={onDelete}>Excluir</Button>
            </ShowDetails>
          </>
        )}
      </Container>
    </>
  )
}
