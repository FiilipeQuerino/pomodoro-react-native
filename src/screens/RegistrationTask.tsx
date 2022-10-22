import { useReducer } from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import {
  FabButton,
  NewTaskModal,
  NoTasksCard,
  Timer,
  TasksList,
} from '../components';
import {
  HomeScreenActions,
  homeScreenInitialState,
  homeScreenReducer,
} from '../reducers';
import { Theme } from '../themes';

const logoImage = require('../../assets/logo.png');

export function RegistrationTask() {
  const [state, dispatch] = useReducer(
    homeScreenReducer,
    homeScreenInitialState
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        {false ? (
          <NoTasksCard />
        ) : (
          <>
          </>
        )}
        <FabButton
          onPress={() =>
            dispatch(HomeScreenActions.toggleModal({ isModalVisible: true }))
          }
        />
        <NewTaskModal
          isVisible={state.isModalVisible}
          onClose={() =>
            dispatch(HomeScreenActions.toggleModal({ isModalVisible: false }))
          }
          onSubmit={(label: string) =>
            dispatch(HomeScreenActions.createTask({ task: { label } }))
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#7ab800',
  },
  container: {
    flex: 1,
  },
  timerContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
