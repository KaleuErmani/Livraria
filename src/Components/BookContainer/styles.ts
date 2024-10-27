import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  background-color: #f8b4d9;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 30px 60px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  &:hover {
    background-color: #f497c5;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`

export const ModalContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #f8b4d9;
  font-size: 16px;
`
export const CloseButton = styled(Button)`
  background-color: #dc3545;
  margin-left: 10px;

  &:hover {
    background-color: #c82333;
  }
`
