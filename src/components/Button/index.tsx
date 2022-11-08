import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ButtonTypeStyleProps, Container, Title, Icon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof Feather.glyphMap;
};

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} />}
      <Title>{title}</Title>
    </Container>
  );
}
