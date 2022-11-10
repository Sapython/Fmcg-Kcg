package com.shreeva.kcg

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import com.getcapacitor.BridgeActivity
import com.mazenrashed.printooth.Printooth
import com.mazenrashed.printooth.data.printable.Printable
import com.mazenrashed.printooth.data.printer.DefaultPrinter
import com.mazenrashed.printooth.ui.ScanningActivity

class MainActivity : BridgeActivity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Initializes the Bridge
      Printooth.init(this);
    }

    public fun getDevices(){
      startActivityForResult(Intent(this, ScanningActivity::class.java), ScanningActivity.SCANNING_FOR_PRINTER)
    }

  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)
    if (requestCode == ScanningActivity.SCANNING_FOR_PRINTER && resultCode == Activity.RESULT_OK){
      var printables = ArrayList<Printable>()
      var printable = Printable.PrintableBuilder()
        .setText("Hello World") //The text you want to print
        .setAlignment(DefaultPrinter.ALLIGMENT_CENTER)
        .setEmphasizedMode(DefaultPrinter.EMPHASISED_MODE_BOLD) //Bold or normal
        .setFontSize(DefaultPrinter.FONT_SIZE_NORMAL)
        .setUnderlined(DefaultPrinter.UNDELINED_MODE_ON) // Underline on/off
        .setCharacterCode(DefaultPrinter.CHARACTER_CODE_USA_CP437) // Character code to support languages
        .setLineSpacing(DefaultPrinter.LINE_SPACING_60)
        .setNewLinesAfter(1) // To provide n lines after sentence
        .build()
      printables.add(printable)
      BluetoothPrinter.printer().print(printables)
    }
    //Printer is ready now
  }
}
