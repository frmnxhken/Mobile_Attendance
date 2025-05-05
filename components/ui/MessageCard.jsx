import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Badge from './Badge';

const MessageCard = ({ title, description, time, badge = false, badgeText = "New", badgeColor = "red" }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar} />
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{title}</Text>
            {badge && (
              <View style={styles.badge}>
                <Badge text={badgeText} color={badgeColor} />
              </View>
            )}
          </View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#d3d3d3',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  badge: {
    marginLeft: 8,
  },
  description: {
    color: '#4A5568',
    fontSize: 14,
    marginBottom: 6,
  },
  time: {
    color: '#A0AEC0',
    fontSize: 12,
  },
});

export default MessageCard;
