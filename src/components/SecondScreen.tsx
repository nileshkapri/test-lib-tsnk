import React, { useEffect, useState } from 'react';
import { View, Text, Linking, Button, Alert } from 'react-native';
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';

const SecondScreen = () => {
  const device = useCameraDevice('back');
  const [isCameraActive, setCameraActive] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') {
      await Linking.openSettings();
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes:any) => {
      if (!hasScanned) {
                setHasScanned(true);
                Alert.alert(`Scanned ${codes[0].value} codes!`);
                console.log(codes[0].value)
      }
    }
  })

  const startCamera = () => {
    setCameraActive(true);
  };

  const stopCamera = () => {
    setCameraActive(false);
    setHasScanned(false);
  };

  if (device == null) {
    return (
      <View>
        <Text>No permission or camera not available</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          device={device}
          isActive={isCameraActive}
          enableZoomGesture
          codeScanner={codeScanner}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
          }}>
          <Button
            title="Start Camera"
            onPress={startCamera}
            disabled={isCameraActive}
          />
          <Button
            title="Stop Camera"
            onPress={stopCamera}
            disabled={!isCameraActive}
          />
        </View>
      </View>
    );
  }
};

export default SecondScreen;

