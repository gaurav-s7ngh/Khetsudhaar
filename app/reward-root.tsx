import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';

// --- Import SVG Assets ---
import Checkmark from '../assets/images/check.svg';
import CoinIcon from '../assets/images/coin.svg';
// We will use these as placeholders for the missing icons

const PIXEL_FONT = 'monospace'; // Use monospace for a pixel-like font

/**
 * A reusable component for the top stat boxes
 */
const StatBox = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.statBox}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

/**
 * A reusable component for each node on the reward path
 */
const RewardNode = ({
  side,
  icon,
  points,
  text,
  isUnlocked,
  isTurquoise,
  style, // This prop is used for positioning
}: {
  side: 'left' | 'right';
  icon: React.ReactNode;
  points: string;
  text: string;
  isUnlocked?: boolean;
  isTurquoise?: boolean;
  style?: ViewStyle;
}) => {
  const nodeStyles = [
    styles.node,
    side === 'left' ? styles.nodeLeft : styles.nodeRight,
    style, // Apply the positioning style
  ];
  const branchStyles = [
    styles.branch,
    side === 'left' ? styles.branchLeft : styles.branchRight,
    isTurquoise ? styles.branchTurquoise : null,
  ];
  
  const textContainerStyles = [
    styles.nodeTextContainer,
    side === 'left' ? styles.nodeTextContainerLeft : null,
  ];

  return (
    <View style={nodeStyles}>
      <View style={branchStyles} />
      {/* Container for the icon and text */}
      <View
        style={[
          styles.nodeContent,
          side === 'left' ? styles.nodeContentLeft : styles.nodeContentRight,
        ]}>
        {/* Icon */}
        <View style={styles.nodeIconContainer}>{icon}</View>
        
        {/* Text content */}
        <View style={textContainerStyles}>
          <View style={styles.nodePointsContainer}>
            <Text style={styles.nodePoints}>{points}</Text>
            <CoinIcon width={16} height={16} style={styles.nodeCoinIcon} />
          </View>
          <Text style={styles.nodeText}>{text}</Text>
        </View>

        {/* Checkmark */}
        {isUnlocked && (
          <View style={styles.checkmark}>
            <Checkmark width={24} height={24} />
          </View>
        )}
      </View>
    </View>
  );
};

/**
 * The main Reward Root Screen component.
 */
export default function RewardRootScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* --- Top Stats --- */}
        <View style={styles.statsContainer}>
          <StatBox label="LESSONS COMPLETED" value="2" />
          <StatBox label="REWARDS COLLECTED" value="3" />
        </View>

        {/* --- Reward Root --- */}
        <Text style={styles.rewardRootTitle}>REWARD ROOT</Text>
        
        <View style={styles.rootContainer}>
          {/* The central vertical trunk */}
          <View style={styles.rootTrunk} />

          {/* The sprout at the bottom */}
          <View style={styles.sproutContainer}>
            {/* Using Applogo as a placeholder for Lessons.svg */}
            <Image source={require('../assets/images/Applogo.png')} style={{width: 40, height: 40}} />
          </View>

          {/* Apply positioning styles to each node */}
          <View style={styles.nodeWrapperView}>
            {/* Using Checkmark as a placeholder for missing icons */}
            <RewardNode
              style={styles.nodeWrapperView_node_1} // Position 1
              side="right"
              icon={<Checkmark width={40} height={40} />} 
              points="1000"
              text="3% OFF RATION"
              isUnlocked
              isTurquoise
            />
            <RewardNode
              style={styles.nodeWrapperView_node_2} // Position 2
              side="left"
              icon={<Checkmark width={40} height={40} />}
              points="3000"
              text="2% DISC SEEDS"
            />
            <RewardNode
              style={styles.nodeWrapperView_node_3} // Position 3
              side="right"
              icon={<Checkmark width={40} height={40} />}
              points="5000"
              text="5% OFF RATION"
            />
            <RewardNode
              style={styles.nodeWrapperView_node_4} // Position 4
              side="left"
              icon={<Checkmark width={40} height={40} />} 
              points="6000"
              text="6% OFF FERTILIZER"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 24, 
  },
  // Stats
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#424242',
  },
  statLabel: {
    color: 'white',
    fontFamily: PIXEL_FONT,
    fontSize: 10,
    marginBottom: 8,
  },
  statValue: {
    color: 'white',
    fontFamily: PIXEL_FONT,
    fontSize: 48,
  },
  // Reward Root
  rewardRootTitle: {
    color: 'white',
    fontFamily: PIXEL_FONT,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  rootContainer: {
    backgroundColor: '#4E342E',
    borderRadius: 24,
    borderWidth: 4,
    borderColor: '#3E2723',
    padding: 16,
    minHeight: 500,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  rootTrunk: {
    width: 12,
    backgroundColor: '#795548',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  sproutContainer: {
    position: 'absolute',
    bottom: -8,
    zIndex: 1,
  },
  nodeWrapperView: {
    position: 'absolute',
    top: 40,
    bottom: 40,
    left: 16,
    right: 16,
  },
  // Reward Node
  node: {
    position: 'absolute',
    width: '50%',
    height: 90,
  },
  nodeLeft: {
    right: '50%',
  },
  nodeRight: {
    left: '50%',
  },
  branch: {
    position: 'absolute',
    height: 8,
    backgroundColor: '#795548',
    width: 70,
    top: '50%',
    marginTop: -4,
    zIndex: 0,
  },
  branchLeft: {
    right: 0,
  },
  branchRight: {
    left: 0,
  },
  branchTurquoise: {
    backgroundColor: '#4DD0E1',
    height: 10,
  },
  nodeContent: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: '50%',
    marginTop: -28,
    gap: 8,
    zIndex: 2,
  },
  nodeContentLeft: {
    right: 80,
    flexDirection: 'row-reverse',
  },
  nodeContentRight: {
    left: 80,
  },
  nodeIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeTextContainer: {
    alignItems: 'flex-start',
  },
  nodeTextContainerLeft: {
    alignItems: 'flex-end', 
  },
  nodePointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nodePoints: {
    color: '#F1B301',
    fontFamily: PIXEL_FONT,
    fontSize: 14,
  },
  nodeCoinIcon: {
    marginLeft: 4,
  },
  nodeText: {
    color: 'white',
    fontFamily: PIXEL_FONT,
    fontSize: 10,
    marginTop: 4,
  },
  checkmark: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // --- Staggering nodes (These are now used) ---
  nodeWrapperView_node_1: {
    top: 40,
  },
  nodeWrapperView_node_2: {
    top: 150,
  },
  nodeWrapperView_node_3: {
    top: 260,
  },
  nodeWrapperView_node_4: {
    top: 370,
  },
});