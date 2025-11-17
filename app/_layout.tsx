import { FontAwesome5 } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- STYLE 1: PRE-LOGIN HEADER (Logo Left, Text Right) ---
function OnboardingHeaderLeft() {
  return (
    <Image
      source={require('../assets/images/Applogo.png')}
      style={styles.logoLeft}
    />
  );
}
function OnboardingHeaderRight() {
  return (
    <View style={styles.textRightContainer}>
      <Text style={styles.headerKhet}>KHET</Text>
      <Text style={styles.headerSudhar}>सुधार</Text>
    </View>
  );
}

// --- STYLE 2: POST-LOGIN HEADER (Profile Left, Logo Right) ---
function AppHeaderLeft() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push('/profile')}>
      <FontAwesome5 name="user-circle" size={28} color="white" style={styles.profileIcon} />
    </TouchableOpacity>
  );
}
function AppHeaderRight() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push('/dashboard')}>
      <Image
        source={require('../assets/images/Applogo.png')}
        style={styles.logoRight}
      />
    </TouchableOpacity>
  );
}

// --- LAYOUT FILE ---
export default function AppLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#151718', // Dark background for header
          },
          headerTintColor: '#fff', // White text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerTitle: 'LOGIN',
            headerLeft: OnboardingHeaderLeft,
            headerRight: OnboardingHeaderRight,
          }}
        />
        <Stack.Screen
          name="language"
          options={{
            headerShown: true,
            headerTitle: 'LANGUAGE',
            headerLeft: OnboardingHeaderLeft,
            headerRight: OnboardingHeaderRight,
          }}
        />
        <Stack.Screen
          name="crop"
          options={{
            headerShown: true,
            headerTitle: 'CHOOSE CROP',
            headerLeft: OnboardingHeaderLeft,
            headerRight: OnboardingHeaderRight,
          }}
        />
        <Stack.Screen
          name="dashboard"
          options={{
            headerShown: true,
            headerTitle: 'DASHBOARD',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        <Stack.Screen
          name="lessons"
          options={{
            headerShown: true,
            headerTitle: 'LESSONS',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        <Stack.Screen
          name="lesson/[id]"
          options={{
            headerShown: true,
            headerTitle: 'LESSON DETAIL',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        
        <Stack.Screen
          name="profile"
          options={{
            headerShown: true,
            headerTitle: 'PROFILE',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        <Stack.Screen
          name="reward-root"
          options={{
            headerShown: true,
            headerTitle: 'REWARDS',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        <Stack.Screen
          name="leaderboard"
          options={{
            headerShown: true,
            headerTitle: 'LEADERBOARD',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        <Stack.Screen
          name="quests" 
          options={{
            headerShown: true,
            headerTitle: 'DAILY QUESTS', 
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        {/* --- NEW SCREEN ADDED HERE --- */}
        // In _layout.tsx
<Stack.Screen
  name="marketPrices" // <-- FIX
  options={{
    headerShown: true,
    headerTitle: 'MARKET PRICES',
    headerLeft: () => <AppHeaderLeft />,
    headerRight: () => <AppHeaderRight />,
  }}
/>
// Add this to app/_layout.tsx
<Stack.Screen
  name="quest-details" // <--- ADD THIS
  options={{
    headerShown: true,
    headerTitle: 'QUEST DETAILS', 
    headerLeft: () => <AppHeaderLeft />,
    headerRight: () => <AppHeaderRight />,
  }}
/>
<Stack.Screen
  name="quest-complete" 
  options={{
    headerShown: true,
    headerTitle: 'QUEST COMPLETE',
    headerLeft: () => <AppHeaderLeft />,
    headerRight: () => <AppHeaderRight />,
  }}
/>
{/* --- ADD THIS NEW SCREEN --- */}
        <Stack.Screen
          name="quest-quiz" 
          options={{
            headerShown: true,
            headerTitle: 'QUEST QUIZ',
            headerLeft: () => <AppHeaderLeft />,
            headerRight: () => <AppHeaderRight />,
          }}
        />
        {/* ----------------------------- */}
      </Stack>

      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  logoLeft: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  textRightContainer: {
    marginRight: 15,
    alignItems: 'flex-end',
  },
  headerKhet: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1,
  },
  headerSudhar: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
  },
  logoRight: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  profileIcon: {
    marginLeft: 15,
  },
});