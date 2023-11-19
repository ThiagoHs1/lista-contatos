import { Circle } from './styles'

type ButtonProps = {
  link: string
  children: string
}

const Button = ({ children, link }: ButtonProps) => (
  <Circle to={link}>{children}</Circle>
)

export default Button
