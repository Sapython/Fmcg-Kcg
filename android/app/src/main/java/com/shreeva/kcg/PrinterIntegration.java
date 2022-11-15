package com.shreeva.kcg;


import android.widget.Toast;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;

@CapacitorPlugin(name = "PrinterIntegration")
public class PrinterIntegration extends Plugin {
  @PluginMethod()
  public void echo(PluginCall call) {
    Toast.makeText(((MainActivity) getActivity()), "Function Called", Toast.LENGTH_SHORT).show();
    String object = ((MainActivity) getActivity()).EnumBt();
    JSObject ret = new JSObject();
    ret.put("addresses",object);
    call.resolve(ret);
  }

  @PluginMethod()
  public void connectToPrinter(PluginCall call) {
    if (call.getString("type").equals("bt")){
      ((MainActivity) getActivity()).connectToPrinter(call.getString("address"));
    } else if (call.getString("type").equals("ble")){
      ((MainActivity) getActivity()).connectToPrinterTwo(call.getString("address"));
    }
    call.resolve();
  }

  @PluginMethod()
  public void printLabel(PluginCall call) throws JSONException {
    Toast.makeText(((MainActivity) getActivity()), "Printing Wait", Toast.LENGTH_SHORT).show();
    ((MainActivity) getActivity()).printLabel(call.getArray("labels").toList(),call.getString("qrData"));
    call.resolve();
    Toast.makeText(((MainActivity) getActivity()), "Printed", Toast.LENGTH_SHORT).show();
  }

  @PluginMethod()
  public void checkStatus(PluginCall call){
    Boolean status = ((MainActivity) getActivity()).checkConnectionStatus();
    JSObject ret = new JSObject();
    ret.put("status",status);
    call.resolve(ret);
  }
}
