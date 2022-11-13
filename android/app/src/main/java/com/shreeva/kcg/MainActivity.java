package com.shreeva.kcg;
import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.widget.Toast;

import androidx.core.app.ActivityCompat;

import com.caysn.autoreplyprint.AutoReplyPrint;
import com.getcapacitor.BridgeActivity;
import com.sun.jna.Pointer;
import com.sun.jna.ptr.IntByReference;


public class MainActivity extends BridgeActivity {
  private Pointer h = Pointer.NULL;
  private MainActivity activity;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(PrinterIntegration.class);
    super.onCreate(savedInstanceState);
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

  public void printLabel(){
    Test_Label_SampleTicket_80MM_1(h);
  }

  void Test_Pos_QueryPrintResult(Pointer h)
  {
    boolean result = AutoReplyPrint.INSTANCE.CP_Pos_QueryPrintResult(h, 30000);
  }

  void Test_Label_SampleTicket_80MM_1(Pointer h)
  {
    AutoReplyPrint.INSTANCE.CP_Pos_SetMultiByteMode(h);
    AutoReplyPrint.INSTANCE.CP_Pos_SetMultiByteEncoding(h, AutoReplyPrint.CP_MultiByteEncoding_UTF8);

    AutoReplyPrint.INSTANCE.CP_Label_PageBegin(h, 0, 0, 576, 240, 0);
    AutoReplyPrint.INSTANCE.CP_Label_DrawText(h, 175, 10, 24, 0, "Qlt: Spike/32/D");
    AutoReplyPrint.INSTANCE.CP_Label_DrawText(h, 175, 40, 24, 0, "Width：48''");
    AutoReplyPrint.INSTANCE.CP_Label_DrawText(h, 175, 70, 24, 0, "Shd: Grey(Dark)");
    AutoReplyPrint.INSTANCE.CP_Label_DrawText(h, 175, 100, 24, 0, "Bkg：Black");
    AutoReplyPrint.INSTANCE.CP_Label_DrawText(h, 175, 130, 24, 0, "Lng：12m");
    AutoReplyPrint.INSTANCE.CP_Label_DrawQRCode(h, 10, 10, 0, AutoReplyPrint.CP_QRCodeECC_L, 7, AutoReplyPrint.CP_Label_Rotation_0, "49052825038959470");
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
