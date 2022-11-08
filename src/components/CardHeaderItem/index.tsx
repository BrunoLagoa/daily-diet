import { Title, Container } from './styles';

type Props = {
  title: string;
};
export function CardHeaderItem({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
