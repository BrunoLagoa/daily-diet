import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';

import { Container, Content, ButtonTitle } from './styles';
import { CardStatistic } from '@components/CardStatistic';
import { CardHeaderItem } from '@components/CardHeaderItem';
import { CardItem } from '@components/CardItem';

const DATA = [
  {
    title: '12.08.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
    ],
  },
  {
    title: '10.09.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
    ],
  },
  {
    title: '02.10.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: false,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: false,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: false,
      },
    ],
  },
  {
    title: '12.08.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
      {
        hour: '20:00',
        title: 'X-tudo',
        status: true,
      },
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <CardStatistic
          title='90,86%'
          subTitle='das refeições dentro da dieta'
        />
        <ButtonTitle>Refeições</ButtonTitle>
        <Button title='Nova refeição' />

        <SectionList
          style={{ marginTop: 32 }}
          sections={DATA}
          keyExtractor={(item, index) => item.hour + index}
          renderItem={({ item }) => <CardItem data={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <CardHeaderItem title={title} />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: 8 }}></View>
          )}
        />
      </Content>
    </Container>
  );
}
