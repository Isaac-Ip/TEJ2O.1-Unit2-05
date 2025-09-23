/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Sep 2025
 * This program gets the current temperature, in K.
*/

// variable
let temperatureInCelsius: number
let temperatureInKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button A is pressed, it shows the temperature
input.onButtonPressed(Button.A, function () {
    //show the temperature
    basic.showString("The temperature is :")
    temperatureInCelsius = input.temperature()
    temperatureInKelvin = Math.round(temperatureInCelsius + 273.15)
    basic.showNumber(temperatureInKelvin)
    basic.showString("K.")
    basic.showIcon(IconNames.Happy)
})
