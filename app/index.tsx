import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.menuIcon}>☰</Text>
            <Text style={styles.logoText}>ROBLOX</Text>
          </View>

          <View style={styles.headerRight}>
            <Text style={styles.icon}>Search</Text>
            <Text style={styles.icon}>Robux</Text>
            <Text style={styles.icon}>Notifications</Text>
          </View>
        </View>

        <View style={styles.profile}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <Text style={styles.username}>xitachixcc</Text>
        </View>

        <View style={styles.friendsSection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.friendItem}>
              <View style={styles.addFriendCircle}>
                <Text style={styles.plusSign}>+</Text>
              </View>
              <Text style={styles.friendName}>Add Friends</Text>
            </View>

            <View style={styles.friendItem}>
              <Image
                source={{ uri: "https://picsum.photos/70" }}
                style={styles.friendAvatar}
              />
              <Text style={styles.friendName}>Ewawito-Oasis</Text>
            </View>

            <View style={styles.friendItem}>
              <Image
                source={{ uri: "https://picsum.photos/71" }}
                style={styles.friendAvatar}
              />
              <Text style={styles.friendName}>covi12388</Text>
            </View>

            <View style={styles.friendItem}>
              <Image
                source={{ uri: "https://picsum.photos/72" }}
                style={styles.friendAvatar}
              />
              <Text style={styles.friendName}>gutielchucky</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.recommendedSection}>
          <Text style={styles.sectionTitle}>Recommended For You</Text>

          <View style={styles.recommendedRow}>
            <View style={styles.recommendedCard}>
              <Image
                source={{ uri: "https://picsum.photos/200/150" }}
                style={styles.recommendedImage}
              />
              <Text style={styles.gameTitle}>Spin a Soccer Card</Text>
              <Text style={styles.gameRating}>94% Rating</Text>
            </View>

            <View style={styles.recommendedCard}>
              <Image
                source={{ uri: "https://picsum.photos/201/150" }}
                style={styles.recommendedImage}
              />
              <Text style={styles.gameTitle}>Project Horizon 6</Text>
              <Text style={styles.gameRating}>69% Rating</Text>
            </View>
          </View>
        </View>

        <View style={styles.continueSection}>
          <Text style={styles.sectionTitle}>Continue</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.continueCard}>
              <Image
                source={{ uri: "https://picsum.photos/130/100" }}
                style={styles.continueImage}
              />
              <Text style={styles.continueTitle}>[BETA] K2 CLIMBING SI...</Text>
            </View>

            <View style={styles.continueCard}>
              <Image
                source={{ uri: "https://picsum.photos/131/100" }}
                style={styles.continueImage}
              />
              <Text style={styles.continueTitle}>Neighbors [18+]</Text>
            </View>

            <View style={styles.continueCard}>
              <Image
                source={{ uri: "https://picsum.photos/132/100" }}
                style={styles.continueImage}
              />
              <Text style={styles.continueTitle}>Case Unboxing</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.alertSection}>
          <Button
            title="Alert"
            onPress={() => Alert.alert("Alert Button pressed")}
            color="#FFFFFF"
          />
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Home</Text>
        </View>

        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Charts</Text>
        </View>

        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Avatar</Text>
        </View>

        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Party</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuIcon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  logoText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  icon: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  friendsSection: {
    paddingLeft: 16,
    paddingVertical: 16,
  },
  friendItem: {
    alignItems: "center",
    marginRight: 16,
  },
  addFriendCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  plusSign: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  friendAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  friendName: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 8,
  },
  recommendedSection: {
    padding: 16,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  recommendedRow: {
    flexDirection: "row",
    gap: 12,
  },
  recommendedCard: {
    flex: 1,
  },
  recommendedImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  gameTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  gameRating: {
    color: "#BBBBBB",
    fontSize: 12,
    marginTop: 4,
  },
  continueSection: {
    paddingLeft: 16,
    paddingVertical: 8,
  },
  continueCard: {
    marginRight: 12,
    width: 130,
  },
  continueImage: {
    width: 130,
    height: 100,
    borderRadius: 8,
  },
  continueTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 8,
  },
  alertSection: {
    padding: 16,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    backgroundColor: "#191919",
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 4,
  },
});
