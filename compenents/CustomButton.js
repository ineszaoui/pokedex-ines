import { StyleSheet, Button, Alert, View } from 'react-native';

export default function CustomButton(props) {

  const {color, title, setText, ...restProps} = props

  return (
      <Button
          onPress={() => setText(color)}
          title={title}
          color={color}
      />
  );
}
