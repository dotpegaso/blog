import React, { useState } from 'react'
import styled from 'styled-components';
import IMAGES from '../../constants/images'

function Dotverse() {
  const [step, updateStep] = useState(1)
  const [raceClass, updateRaceClass] = useState(null)
  const [alingmnent, updateAlignment] = useState(null)
  const [finalClass, updateFinalClass] = useState(null)

  function handleRaceClass(race, alingmnent) {
    race && updateRaceClass(race)
    alingmnent && updateAlignment(alingmnent)

    if (step === 6 || step === 3) {
      if (alingmnent) {
        switch (alingmnent) {
          case 'Caos':
            raceClass === 'Clérigo(a)' && updateFinalClass('Anti-Clérigo')
            raceClass === 'Guerreiro(a)' && updateFinalClass('Berserker')
            raceClass === 'Ladrão/Ladra' && updateFinalClass('Assassino(a)')
            raceClass === 'Mago(a)' && updateFinalClass(raceClass)
            break;
        
          default:
            updateFinalClass(raceClass)
            break;
        }
      } else {
        updateFinalClass(raceClass)
      }
    }

    updateStep(step + 1)
  }

  return (
    <Container style={{ backgroundColor: window.navigator.userAgent.toLowerCase().indexOf('safari') !== -1 && window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ? '#00345f' : '#114069'}}>
      <Video src={require('../../assets/dotverso.mp4')} autoPlay muted disableRemotePlayback playsInline/>
      <Content>

        { step === 1 && (
          <>
            <Title>Olá sobrevivente!</Title>
            <Paragraph>Não quero ter que fazer você ler um monte de</Paragraph>
            <Paragraph>regrinha chata de um livro gigante pra decidir</Paragraph>
            <Paragraph>algo simples: <span>sua classe de nível 1</span></Paragraph>
            <br />
            <Paragraph>Aqui é tech stuff, digital streetwise, tá ligado?</Paragraph>
            <br />
            <Paragraph>Então responda algumas perguntas à seguir</Paragraph>
            <Paragraph>que eu te direi qual classe se encaixa melhor</Paragraph>
            <Paragraph>no teu tipo de jogo️, tipo buzzfeed</Paragraph>
            <Button onClick={() => updateStep(step + 1)}>
              Escolher classe
              <Image src={IMAGES.CHEVRON_RIGHT} />
            </Button>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=5513996863522&text=Me%20manda%20o%20PDF%20do%20livro%20b%C3%A1sico%20do%20DCC,%20por%20favor">Caso queira ler o livro de regras mesmo assim, clica aqui</Link>
          </>
        )}

        { step === 2 && (
          <>
            <Title>A primeira pergunta é crucial</Title>
            <Paragraph>Seu personagem é humano(a)?</Paragraph>
            <Button onClick={() => updateStep(step + 3)}>
              Sim, é humano(a)
              <Image src={IMAGES.CHEVRON_RIGHT} />
            </Button>

            <br />

            <Paragraph>Caso não seja, qual é a raça?</Paragraph>
            <Button onClick={() => handleRaceClass('Anão/Anã')}>
              Anão/Anã
              <Image src={IMAGES.CHEVRON_RIGHT} />
            </Button>
            <Button onClick={() => handleRaceClass('Elfo(a)')}>
              Elfo(a)
              <Image src={IMAGES.CHEVRON_RIGHT} />
            </Button>
            <Button onClick={() => handleRaceClass('Halfling')}>
              Halfling
              <Image src={IMAGES.CHEVRON_RIGHT} />
            </Button>
          </>
        )}

        { step === 3 && (
          <>
          <Title>Então tá feito!</Title>
          <Paragraph>Sua classe será definitivamente <span>{raceClass}</span></Paragraph>
          <br />
          <Paragraph><span>– Oxe, mas desde quando {raceClass} é classe, tá doido?</span></Paragraph>
          <Paragraph><span>Não serei um(a) Mago(a), Clérigo(a) ou Guerreiro(a)?</span></Paragraph>
          <br />
          <Paragraph>Na era de ouro dos RPGs, entre ‘74~'85, elfos, anões e</Paragraph>
          <Paragraph>halflings evoluíam para classes do mesmo nome,</Paragraph>
          <Paragraph>ganhando umas habilidades novas e tal</Paragraph>
          <br />
          <Paragraph>Clica no botão abaixo pra ver o que você vai conseguir</Paragraph>
          <Paragraph>fazer agora que tem {raceClass} como classe!</Paragraph>
          <Button onClick={() => handleRaceClass()}>
            Entenda a classe {raceClass}
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          </>
        )}

        { step === 4 && (
          <>
          <Title>{finalClass} como classe</Title>

          { finalClass === 'Anão/Anã' && (
            <>
              <Paragraph>- Irá somar 1d10 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Terá vantagens usando machados de guerra,</Paragraph>
              <Paragraph>armas longas e martelos de guerra;</Paragraph>
              <Paragraph>- Dados adicionais para ataque e dano;</Paragraph>
              <Paragraph>- Feitos extraordinários de combate;</Paragraph>
              <Paragraph>- Ataque com escudos;</Paragraph>
              <Paragraph>- Bônus de acerto usando arma favorita</Paragraph>
            </>
          )}
          
          { finalClass === 'Elfo(a)' && (
            <>
              <Paragraph>- Irá somar 1d6 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Receberá uma armadura de mithril (+3 armadura);</Paragraph>
              <Paragraph>- Bônus para lançar magias;</Paragraph>
              <Paragraph>- Conseguirá invocar entidades de outro mundo</Paragraph>
            </>
          )}
          
          { finalClass === 'Halfling' && (
            <>
              <Paragraph>- Irá somar 1d6 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Utiliza duas armas em combate, rola 2 dados;</Paragraph>
              <Paragraph>- Acerto crítico com 16 e 20;</Paragraph>
              <Paragraph>- Erro crítico apenas quando ambos os dados resultarem 1;</Paragraph>
              <Paragraph>- Furtividade, fazendo adagas causarem dano com 1d10;</Paragraph>
              <Paragraph>- Pode queimar sorte para ajudar aliados</Paragraph>
              <Paragraph>- Recupera queima de sorte;</Paragraph>
            </>
          )}

          <br />
          <LinkButton target="_blank"  href={`https://api.whatsapp.com/send?phone=5513996863522&text=A%20minha%20classe%20no%20DCC%20ser%C3%A1%20${finalClass}`}>
            Compartilha comigo seu resultado
            <Image src={IMAGES.SHARE} />
          </LinkButton >
          </>
        )}

        { step === 5 && (
          <>
          <Title>Como você prefere se aventurar?</Title>
          <Button onClick={() => handleRaceClass('Mago(a)')}>
            Indo atrás de segredos obscuros
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          <Button onClick={() => handleRaceClass('Guerreiro(a)')}>
            Descendo o braço nos anticristos
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          <Button onClick={() => handleRaceClass('Ladrão/Ladra')}>
            Sempre buscando sorte na espreita
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          <Button onClick={() => handleRaceClass('Clérigo(a)')}>
            Ajudando o pessoal ao meu redor
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          <Button onClick={() => handleRaceClass('Clérigo(a)')}>
            Servindo ao Deus Ramat
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          </>
        )}
        
        { step === 6 && (
          <>
          <Title>Qual é o seu alinhamento?</Title>
          <Button onClick={() => handleRaceClass(null, 'Ordem')}>
            Gente boa, da Ordem
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          <Button onClick={() => handleRaceClass(null, 'Neutro')}>
            Neutrão
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          <Button onClick={() => handleRaceClass(null, 'Caos')}>
            Bem filho da puta, do Caos
            <Image src={IMAGES.CHEVRON_RIGHT} />
          </Button>
          </>
        )}
        
        { step === 7 && (
          <>
          <Title>Então tá feito!</Title>
          <Paragraph>Sua classe será definitivamente <span>{finalClass}</span></Paragraph>
          <br />
          { finalClass === 'Clérigo(a)' && (
            <>
              <Paragraph>- Irá somar 1d8 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Irá escolher um deus para adorar, seja da Ordem ou Neutro;</Paragraph>
              <Paragraph>- Poderá canalizar magias para atacar;</Paragraph>
              <Paragraph>- Poderá curar feridos através do Toque de Cura;</Paragraph>
              <Paragraph>- Bônus para ataque contra demônios e mortos-vivos</Paragraph>
            </>
          )}
          { finalClass === 'Anti-Clérigo' && (
            <>
              <Paragraph>- Irá somar 1d8 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Irá escolher um deus do {alingmnent} para adorar;</Paragraph>
              <Paragraph>- Deverá realizar sacrifícios de sangue para conjurar magias;</Paragraph>
              <Paragraph>- Possuirá o poder de Dreno de Vida;</Paragraph>
              <Paragraph>- Cura maligna - deixará marcas e cicatrizes;</Paragraph>
              <Paragraph>- Poderá transformar demônios e mortos-vivos em aliados</Paragraph>
            </>
          )}
          { finalClass === 'Ladrão/Ladra' && (
            <>
              <Paragraph>- Irá somar 1d6 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Conhecerá uma língua secreta, falada apenas por Ladrões;</Paragraph>
              <Paragraph>- Diversas habilidades de ladinagem;</Paragraph>
              <Paragraph>- Furtividade, fazendo adagas causarem dano com 1d10;</Paragraph>
              <Paragraph>- Recebe dados extras ao queimar Sorte;</Paragraph>
              <Paragraph>- Recupera Sorte gasta;</Paragraph>
              <Paragraph>- Membro de guildas</Paragraph>
            </>
          )}
          { finalClass === 'Assassino(a)' && (
            <>
              <Paragraph>- Irá somar 1d6 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Carrega uma arma secreta;</Paragraph>
              <Paragraph>- Diversas habilidades de ladinagem;</Paragraph>
              <Paragraph>- Mestre de envenenamento;</Paragraph>
              <Paragraph>- Ataque natural venenoso;</Paragraph>
              <Paragraph>- Recebe dados extras ao queimar Sorte</Paragraph>
            </>
          )}
          { finalClass === 'Guerreiro(a)' && (
            <>
              <Paragraph>- Irá somar 1d12 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Feitos extraordinários de combate;</Paragraph>
              <Paragraph>- Dados adicionais para ataque e dano;</Paragraph>
              <Paragraph>- Acertos críticos com 19 e 20;</Paragraph>
              <Paragraph>- Bônus de iniciativa;</Paragraph>
              <Paragraph>- Arma da sorte;</Paragraph>
              <Paragraph>- Ordem militar</Paragraph>

            </>
          )}
          { finalClass === 'Berserker' && (
            <>
              <Paragraph>- Irá somar 1d10 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Recebe uma armadura +5;</Paragraph>
              <Paragraph>- Sexto sentido, vantagem pra testes de reflexo;</Paragraph>
              <Paragraph>- Ataque extra imediato quando mata um inimigo;</Paragraph>
              <Paragraph>- Dados de frustação, bônus de dano ao errar golpes</Paragraph>
            </>
          )}
          { finalClass === 'Mago(a)' && (
            <>
              <Paragraph>- Irá somar 1d4 de vida ao seu total atual;</Paragraph>
              <Paragraph>- Poderá canalizar magias para atacar;</Paragraph>
              <Paragraph>- Conseguirá invocar entidades de outro mundo;</Paragraph>
              <Paragraph>- Bônus para jogadas de conjuração;</Paragraph>
              <Paragraph>- Conseguirá invocar familiares/pequenos monstros;</Paragraph>
            </>
          )}
          <br />
          <LinkButton target="_blank" href={`https://api.whatsapp.com/send?phone=5513996863522&text=A%20minha%20classe%20no%20DCC%20ser%C3%A1%20${finalClass}`}>
            Compartilha comigo seu resultado
            <Image src={IMAGES.SHARE} />
          </LinkButton>
          </>
        )}
        
      </Content>
    </Container>
  )
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  color: #BBB;

  @media screen and (max-width: 490px) {
    flex-wrap: wrap;
    min-height: 100vh;
    height: 100%;
  }
`
export const Video = styled.video`
  width: 55vw;

  @media screen and (max-width: 490px) {
    width: 100%;
  }

  &::-internal-media-controls-overlay-cast-button {
    display: none;
  }
`

export const Content = styled.div`
  width: 45vw;
  padding: 8vw 10vw 0 0;
  
  @media screen and (max-width: 490px) {
    width: 100%;
    padding: 0 20px;
  }
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

  @media screen and (max-width: 490px) {
    width: 100%;
    font-size: 14px;

    &:last-child {
      margin-bottom: 80px;
    }
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

  @media screen and (max-width: 490px) {
    font-size: 16px;
  }
`

export const Title = styled.h2`
  color: #FFF;
  font-family: 'Noto Sans', sans-serif;

  @media screen and (max-width: 490px) {
    margin-top: 0
  }
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

  @media screen and (max-width: 490px) {
    width: 100%;
    font-size: 14px;

    &:last-child {
      margin-bottom: 80px;
    }
  }
`

export default Dotverse