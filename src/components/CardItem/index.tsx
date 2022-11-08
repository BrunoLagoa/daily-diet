import { Container, Hour, Title, Status, Divider } from './styles';

type Props = {
  data: {
    hour: string;
    title: string;
    status: boolean;
  };
};
export function CardItem({ data: { hour, title, status } }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Divider />
      <Title>{title}</Title>
      <Status />
    </Container>
  );
}
