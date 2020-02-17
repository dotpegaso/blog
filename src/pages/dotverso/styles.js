import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #11314C;

  @media screen and (max-width: 490px) {
    flex-wrap: wrap;
  }
`

export const Video = styled.video`
  width: 50vw;
  margin: 0 auto;
  display: block;
`