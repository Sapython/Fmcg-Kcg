package com.shreeva.kcg

import com.getcapacitor.Plugin
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod
import com.getcapacitor.PluginCall
import com.shreeva.kcg.PrinterIntegration

@CapacitorPlugin(name = "RdService")
class PrinterIntegration : Plugin() {
    @PluginMethod
    @Throws(InterruptedException::class)
    fun getDeviceList(call: PluginCall) {
        mainCall = call
        val value = call.getString("type")
        println(value)
        call.setKeepAlive(true)
    }

    companion object {
        private var mainCall: PluginCall? = null
    }
}
