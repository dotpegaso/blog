import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #00345f;
  color: #BBB;

  @media screen and (max-width: 490px) {
    flex-wrap: wrap;
  }
`
export const Video = styled.video`
  width: 55vw;
`

export const Content = styled.div`
  width: 45vw;
  padding: 8vw 10vw 0 0;
`
export const Button = styled.button`
  background-color: transparent;
  box-shadow: inset 3px 3px 6px rgba(24, 23, 23, 0.4), inset -1px -1px 2px rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  border: none;
  color: #BBB;
  padding: 15px 0;
  width: 85%;
  margin: 0 auto 0 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: 'Noto Sans', sans-serif;
  transition-duration: .1s;
  text-align: center;
  position: relative;
  margin-top: 20px;
  outline: none;

  &:hover {
    cursor: pointer;
    color: #FFF; 
  }
`

export const Image = styled.img`
  display: inline-block;
  height: 20px;
  width: 20px;
  opacity: .9;
  position: absolute;
  right: 25px;
`

export const Paragraph = styled.p`
  margin: 0;
  color: #BBB;
  font-family: 'Noto Sans', sans-serif;

  span {
    color: #FFF;
    font-weight: 700;
  }
`

export const Title = styled.h2`
  color: #FFF;
  font-family: 'Noto Sans', sans-serif;
`
export const Link = styled.a`
  color: #BBB;
  font-family: 'Noto Sans', sans-serif;
  margin-top: 20px;
  display: inline-block;
  font-size: 12px;
  opacity: .5;
`

export const LinkButton = styled.a`
  text-decoration: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 6px rgba(24, 23, 23, 0.4), inset -1px -1px 2px rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  border: none;
  color: #BBB;
  padding: 15px 0;
  width: 85%;
  margin: 0 auto 0 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: 'Noto Sans', sans-serif;
  transition-duration: .1s;
  text-align: center;
  position: relative;
  margin-top: 20px;
  outline: none;

  &:hover {
    cursor: pointer;
    color: #FFF;
    box-shadow: inset 3px 3px 6px rgba(24, 23, 23, 0.4), inset -1px -1px 2px rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    border: none;
  }
`