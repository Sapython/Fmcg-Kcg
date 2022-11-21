package com.shreeva.kcg;
import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import androidx.activity.result.contract.ActivityResultContracts;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.caysn.autoreplyprint.AutoReplyPrint;
import com.getcapacitor.BridgeActivity;
import com.sun.jna.Pointer;
import com.sun.jna.ptr.IntByReference;

import java.util.List;


public class MainActivity extends BridgeActivity {
  private Pointer h = Pointer.NULL;
  private MainActivity activity;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(PrinterIntegration.class);
    super.onCreate(savedInstanceState);
    if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.BLUETOOTH_CONNECT) == PackageManager.PERMISSION_DENIED)
    {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S)
      {
        ActivityCompat.requestPermissions(MainActivity.this, new String[]{Manifest.permission.BLUETOOTH_CONNECT}, 2);
      }
    }

  }

  public boolean checkGPSEnabled() {
    boolean isEnabled = false;
    LocationManager lm = (LocationManager) this.getSystemService(this.LOCATION_SERVICE);
    boolean ok = lm.isProviderEnabled(LocationManager.GPS_PROVIDER);
    if (ok) {
      isEnabled = true;
    } else {
      Toast.makeText(this, "Please enable gps else will not search ble printer", Toast.LENGTH_SHORT).show();
      Intent intent = new Intent();
      intent.setAction(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
      startActivityForResult(intent, 2);
    }
    return isEnabled;
  }
  public boolean checkLocationPermission() {
    boolean hasPermission = false;
    if (Build.VERSION.SDK_INT >= 23) {
      if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
        String[] LOCATIONGPS = new String[]{
          Manifest.permission.ACCESS_COARSE_LOCATION,
          Manifest.permission.ACCESS_FINE_LOCATION,
          Manifest.permission.READ_PHONE_STATE
        };
        ActivityCompat.requestPermissions(this, LOCATIONGPS, 1);
      } else {
        hasPermission = true;
      }
    } else {
      hasPermission = true;
    }
    return hasPermission;
  }
  private boolean checkBluetoothPermission() {
    return checkGPSEnabled() && checkLocationPermission();
  }
  boolean inBtEnum = false;
  public String EnumBt() {
    if (!checkBluetoothPermission()) {
      Toast.makeText(this, "No Bluetooth", Toast.LENGTH_SHORT).show();
      return "";
    }
    if (inBtEnum) {
      Toast.makeText(this, "No BT ENUM", Toast.LENGTH_SHORT).show();
      return "";
    }
    inBtEnum = true;
    IntByReference cancel = new IntByReference(0);
    final String[] data = {""};
    AutoReplyPrint.CP_OnBluetoothDeviceDiscovered_Callback callback = new AutoReplyPrint.CP_OnBluetoothDeviceDiscovered_Callback() {
      @Override
      public void CP_OnBluetoothDeviceDiscovered(String device_name, final String device_address, Pointer private_data) {
        Toast.makeText(getApplicationContext(),device_address,Toast.LENGTH_SHORT).show();
        System.out.println(data[0]);
        data[0] = (data[0] +"|"+ device_address+","+device_name);
      }
    };
    AutoReplyPrint.INSTANCE.CP_Port_EnumBtDevice(12000, cancel, callback, null);
    inBtEnum = false;
    Toast.makeText(this, "Started thread", Toast.LENGTH_SHORT).show();
    return data[0];
  }

  public void connectToPrinter(String address){
    h = AutoReplyPrint.INSTANCE.CP_Port_OpenBtSpp(address, 1);
  }

  public void connectToPrinterTwo(String address){
    h = AutoReplyPrint.INSTANCE.CP_Port_OpenBtBle(address, 1);
  }

  public void printLabel(List<String> labels,String qrData){
    Test_Label_SampleTicket_80MM_1(h,labels,qrData);
  }

  void Test_Pos_QueryPrintResult(Pointer h)
  {
    boolean result = AutoReplyPrint.INSTANCE.CP_Pos_QueryPrintResult(h, 30000);
  }

  void Test_Label_SampleTicket_80MM_1(Pointer h, List<String> labels, String qrData)
  {
    AutoReplyPrint.INSTANCE.CP_Pos_SetMultiByteMode(h);
    AutoReplyPrint.INSTANCE.CP_Pos_SetMultiByteEncoding(h, AutoReplyPrint.CP_MultiByteEncoding_UTF8);
    AutoReplyPrint.INSTANCE.CP_Label_PageBegin(h, 0, 0, 576, 240, 0);
    for (int i = 0; i < labels.size(); i++) {
      AutoReplyPrint.INSTANCE.CP_Label_DrawText(h, 205, (i*30)+10, 24, 0, labels.get(i));
    }
    AutoReplyPrint.INSTANCE.CP_Label_DrawQRCode(h, 15, 10, 0, AutoReplyPrint.CP_QRCodeECC_L, 7, AutoReplyPrint.CP_Label_Rotation_0, qrData);
    AutoReplyPrint.INSTANCE.CP_Label_PagePrint(h, 1);
    {
      Test_Pos_QueryPrintResult(h);
    }
  }

  boolean checkConnectionStatus(){
    boolean valid = AutoReplyPrint.INSTANCE.CP_Port_IsConnectionValid(h);
    Toast.makeText(this,"Validity " + valid,Toast.LENGTH_LONG).show();
    return valid;
  }

}
