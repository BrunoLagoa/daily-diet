import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/Logo.svg';
import Ellipse from '../../assets/Ellipse.svg';

import { Container, BackButton, BackIcon, Title } from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  if (showBackButton) {
    return (
      <Container>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
        <Title>Nova refeição</Title>
      </Container>
    );
  }

  return (
    <Container style={{ justifyContent: 'space-between' }}>
      <Logo />
      <Ellipse />
    </Container>
  );
}
