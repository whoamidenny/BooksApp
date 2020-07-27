package com.popcornbooks;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here
import android.content.Intent;

public class SplashActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    
    super.onCreate(savedInstanceState);
    Intent intent = new Intent(this, MainActivity.class);
    startActivity(intent);
    finish();
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "PopcornBooks";
  }
}
