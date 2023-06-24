function convertCelsiusToFahrenheit() {
      var celsiusInput = document.getElementById("celsius");
      var fahrenheitInput = document.getElementById("fahrenheit");
      var resultElement = document.getElementById("result");

      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9/5) + 32;

      if (!isNaN(celsius)) {
        fahrenheitInput.value = fahrenheit.toFixed(2);
        resultElement.innerHTML = "";
      } else {
        fahrenheitInput.value = "";
        resultElement.innerHTML = "Please enter a valid temperature in Celsius.";
      }
    }

    function convertFahrenheitToCelsius() {
      var celsiusInput = document.getElementById("celsius");
      var fahrenheitInput = document.getElementById("fahrenheit");
      var resultElement = document.getElementById("result");

      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;

      if (!isNaN(fahrenheit)) {
        celsiusInput.value = celsius.toFixed(2);
        resultElement.innerHTML = "";
      } else {
        celsiusInput.value = "";
        resultElement.innerHTML = "Please enter a valid temperature in Fahrenheit.";
      }
    }
