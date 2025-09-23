"""
Created by: Isaac Ip
Created on: Sep 2025
This module is a Micro:bit MicroPython program
This program gets and shows the temperature.
"""

from microbit import *
import temperature

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temperatureInCelsius = temperature()
        temperatureInKelvin = round(temperatureInKelvin + 273.15)
        display.show("The temperature is:" + temperatureInKelvin + "K.")
        display.show(Image.HAPPY)
