package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
        {
            add(GoogleAuth.class);
            add(com.capacitorjs.plugins.camera.CameraPlugin.class);
        }
        });
    }
}
