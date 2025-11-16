import { useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// --- IMPORTANT ---
// Make sure these assets exist:
import Checkmark from '../../assets/images/check.svg';
import Coin from '../../assets/images/coin.svg';
// -----------------

// We need to know the lesson info to show the title and reward
// This is a temporary data store.
const LESSON_INFO: { [key: string]: any } = {
  '1': {
    title: 'Basics of Sustainable Banana Farming in Kerala',
    points: 1000,
  },
  '2': { title: 'Healthy Soil for Better Plants', points: 1500 },
  '3': { title: 'Shade and Plant Diversity for Bananas', points: 1000 },
  '4': { title: 'Smart Water Use for Banana Farms', points: 1500 },
  '5': { title: 'Natural Pest Control and Clean Harvesting', points: 1000 },
};

export default function LessonCompleteScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Get the lesson info, or default to lesson 1
  const lesson = LESSON_INFO[id] || LESSON_INFO['1'];

  const handleContinue = () => {
    // Go back to the main lessons list
    router.push('/lessons');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Lesson Title Card */}
        <View style={styles.lessonTitleCard}>
          <Text style={styles.lessonNumber}>{id}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
        </View>

        {/* Main Completion Card */}
        <View style={styles.card}>
          <Checkmark width={200} height={200} style={styles.checkmark} />
          <Text style={styles.completeText}>LESSON COMPLETED!</Text>

          <View style={styles.rewardContainer}>
            <Text style={styles.rewardTitle}>REWARD EARNED:</Text>
            <View style={styles.pointsContainer}>
              <Coin width={30} height={30} style={styles.coinIcon} />
              <Text style={styles.pointsText}>{lesson.points}</Text>
            </View>
          </View>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#151718',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  lessonTitleCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#444',
  },
  lessonNumber: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: '900',
    fontFamily: 'monospace',
    marginRight: 15,
    lineHeight: 50,
  },
  lessonTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  card: {
    backgroundColor: '#388e3c', // Green card
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  checkmark: {
    marginBottom: 20,
  },
  completeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    letterSpacing: 1,
    marginBottom: 20,
  },
  rewardContainer: {
    alignItems: 'center',
  },
  rewardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'monospace',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  coinIcon: {
    marginRight: 10,
  },
  pointsText: {
    color: '#FDD835', // Gold/Yellow color
    fontSize: 24,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#388e3c',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});