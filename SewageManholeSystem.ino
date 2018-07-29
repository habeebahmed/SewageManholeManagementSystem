
#include <ESP8266WiFi.h>
#include <ESP8266WiFiAP.h>
#include <ESP8266WiFiGeneric.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266WiFiScan.h>
#include <ESP8266WiFiSTA.h>
#include <ESP8266WiFiType.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>
#include <WiFiServer.h>
#include <WiFiServerSecure.h>
#include <WiFiUdp.h>

#include <ESP8266HTTPClient.h>


#define out1 12 //d6
#define in 13 //d7
#define in1 16 //d8
const char* ssid = "AndroidAP";
const char* password = "clvi1477";
void setup() {
  Serial.begin(57600);
  // put your setup code here, to run once:
  digitalWrite(in1,INPUT);
  digitalWrite(in,INPUT);
  WiFi.begin(ssid, password);
   
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.print("Connecting..");
    }
}


void loop() {
//  digitalWrite(out1,HIGH);
  // put your main code here, to run repeatedly:
  if(digitalRead(in)==HIGH)
  {
    if (WiFi.status() == WL_CONNECTED) {
        Serial.print("Connected");
        //Check WiFi connection status
          HTTPClient http;  //Declare an object of class HTTPClient
           
           http.begin("http://apricot-pie-53281.herokuapp.com/overflow?manholeId=89898");
           int httpCode = http.GET();
    
            if(httpCode == HTTP_CODE_OK)
            {
               Serial.print("HTTP response code ");
               Serial.println(httpCode);
               String response = http.getString();
               Serial.println(response);
            }
          else
          {
            Serial.print("Failed to send req");
          }
            
            http.end();   //Close connection
    }
    else
    {
      Serial.print("Not connected");
    }
    
  }
  
  if(digitalRead(in1)==LOW)
  {
    if (WiFi.status() == WL_CONNECTED) {
        Serial.print("Connected");
        //Check WiFi connection status
          HTTPClient http;  //Declare an object of class HTTPClient
           
           http.begin("http://apricot-pie-53281.herokuapp.com/noManhole?manholeId=89898");
           int httpCode = http.GET();
    
            if(httpCode == HTTP_CODE_OK)
            {
               Serial.print("HTTP response code ");
               Serial.println(httpCode);
               String response = http.getString();
               Serial.println(response);
            }
          else
          {
            Serial.print("Failed to send req");
          }
            
            http.end();   //Close connection
    }
    else
    {
      Serial.print("Not connected");
    }
    
  }
  
  
}
