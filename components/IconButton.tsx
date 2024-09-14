import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

type IconButtonProps = {
	icon: any;
	label: string;
	onPress: any;
};

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
	return (
		<Pressable style={styles.iconButton} onPress={onPress}>
			<MaterialIcons name={icon} size={24} color={'#fff'} />
			<Text style={styles.iconButtonLabel}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	iconButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconButtonLabel: {
		color: '#fff',
		marginTop: 12,
	},
});
