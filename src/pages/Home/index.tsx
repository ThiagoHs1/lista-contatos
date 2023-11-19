import ButtonAdd from '../../components/Button'
import ListContact from '../../container/ListContact'
import { Container } from './styles'

export const Home = () => (
  <Container>
    <ListContact />
    <ButtonAdd link="/novo">Adicionar</ButtonAdd>
  </Container>
)

export default Home
