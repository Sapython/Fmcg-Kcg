package com.shreeva.kcg;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.bluetoothserial.plugin.BluetoothSerial;


public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Initializes the Bridge
      registerPlugin(BluetoothSerial.class);
    }
}
