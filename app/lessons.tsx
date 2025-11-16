import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Mascot from '../assets/images/Mascot.svg';
import Coin from '../assets/images/coin.svg';

const LESSON_DATA = [
  {
    number: '1',
    title: 'Basics of Sustainable Farming',
    description: "How to grow plants sustainably in Kerala's climate to save money, improve quality",
    points: 1000,
  },
  {
    number: '2',
    title: 'Healthy Soil for Better Plants',
    description: 'How to make soil rich with banana waste compost, no chemicals for healthier banana plants.',
    points: 1500,
  },
  {
    number: '3',
    title: 'Shade and Plant Diversity for Bananas',
    description: 'How to use shade trees and mixed crops to protect bananas, save water, and stop pests naturally.',
    points: 1000,
  },
  {
    number: '4',
    title: 'Smart Water Use for Banana Farms',
    description: 'How to save water with mulching and drip irrigation to keep banana plants healthy in dry times.',
    points: 1500,
  },
  {
    number: '5',
    title: 'Natural Pest Control and Clean Harvesting',
    description: 'How to stop pests with neem, pick ripe bananas, and dry them for high-quality, chemical-free sales.',
    points: 1000,
  },
];

// Reusable Lesson Card Component
function LessonCard({
  number,
  title,
  description,
  points,
  isCurrent = false,
}: (typeof LESSON_DATA)[0] & { isCurrent?: boolean }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[
        styles.lessonCard,
        isCurrent && styles.currentLessonCard, // Apply glow/shadow
      ]}
      onPress={() =>
        router.push({
          pathname: '/lesson/[id]',
          params: { id: number },
        })
      }>
      <Text style={[styles.lessonNumber, isCurrent && styles.currentLessonNumber]}>
        {number}
      </Text>
      <View style={styles.lessonContent}>
        <Text style={styles.lessonTitle}>{title}</Text>
        <Text style={styles.lessonDescription}>{description}</Text>
        <View style={styles.pointsContainer}>
          <Coin width={24} height={24} style={styles.coinIcon} />
          <Text style={styles.pointsText}>{points}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function LessonsScreen() {
  const router = useRouter();
  const currentLesson = LESSON_DATA[0];
  const moreLessons = LESSON_DATA.slice(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Current Lesson Section */}
        <View style={styles.currentSection}>
          <Mascot width={140} height={140} style={styles.mascot} />
          <View style={styles.currentTag}>
            <Text style={styles.currentTagText}>CURRENT LESSON</Text>
          </View>
        </View>
        <LessonCard {...currentLesson} isCurrent={true} />

        {/* More Lessons Section */}
        <Text style={styles.moreLessonsTitle}>MORE LESSONS</Text>
        {moreLessons.map((lesson) => (
          <LessonCard key={lesson.number} {...lesson} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#151718', // Dark background
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 50, // <-- FIX 1: Changed from 10 to 50 to move cow down from header
    paddingBottom: 30,
  },
  currentSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 90,
    marginBottom: -40, // This pulls the card UP by 40px
    paddingHorizontal: 10,
    // zIndex: 10, // <-- FIX 2: Removed zIndex so card renders ON TOP
  },
  mascot: {
    transform: [{ translateX: -15 }],
  },
  currentTag: {
    backgroundColor: '#388e3c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
    transform: [{ translateY: -30 }],
    shadowColor: '#388e3c',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  currentTagText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  moreLessonsTitle: {
    color: '#777',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,
    letterSpacing: 1,
  },
  lessonCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  currentLessonCard: {
    // paddingTop: 45, // <-- FIX 3: Removed this, not needed
    paddingLeft: 20,
    backgroundColor: '#222',
    borderColor: '#388e3c',
    shadowColor: '#388e3c',
    shadowOpacity: 0.7,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },
  lessonNumber: {
    color: '#555',
    fontSize: 80,
    fontWeight: '900',
    fontFamily: 'monospace',
    marginRight: 15,
    lineHeight: 80,
  },
  currentLessonNumber: {
    color: '#FFFFFF',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  lessonDescription: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  coinIcon: {
    marginRight: 8,
  },
  pointsText: {
    color: '#FDD835',
    fontSize: 18,
    fontWeight: 'bold',
  },
});