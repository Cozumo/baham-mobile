import { StyleSheet ,ScrollView, Text, View } from 'react-native';
import FeedbackForm from './Feedback';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const vehicleModels = ['Toyota Avalon', 'Toyota Camry', 'Toyota Corolla', 'Toyota Passo', 'Toyota Hiace', 'Toyota Prius', 'Toyota Yaris', 'Toyota Fortuner', 'Toyota Hilux', 'Honda City', 'Honda Civic', 'Honda Grace', 'Honda Fit', 'Honda Accord', 'Honda Vezel', 'Suzuki Mehran', 'Suzuki Khyber', 'Suzuki Swift', 'Suzuki Alto', 'Suzuki Bolan', 'Suzuki Liana', 'Suzuki Cultus', 'Suzuki Wagon-R', 'Daihatsu Cuore', 'Daihatsu Mira', 'Daihatsu Hijet', 'Daihatsu Move']

export default function App() {
  return (
    <View style={styles.container}>
      
      <AppHeader heading="Baham" slogan="Reducing your carbon footprint..." />

      <View style={styles.mainContainer}>
        <ScrollView 
            indicatorStyle={'white'}
            horizontal={false}
            style={styles.list}
        >
        { vehicleModels.map((item, index) => (<Text key={index} style={styles.listStyle}>{index + 1} - {item}</Text>)) }

          <FeedbackForm/>
        </ScrollView>

      </View>

      <AppFooter copyright="Copyright: Baham by project Dareecha (2023) -" location="Karachi IE & T" />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 0.8
  },
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
    backgroundColor: 'gold'
  },
  list: {
    padding: 20,
    backgroundColor: 'beige'
  },
  listStyle: {
    fontSize: 22
  }
});