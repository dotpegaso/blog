import React from 'react'
import { Container, Video } from './styles'

const Dotverse = () => (
  <Container>
    <Video src={require('../../assets/dotverso.mp4')} autoPlay muted disableRemotePlayback />
  </Container>
)

export default Dotverse