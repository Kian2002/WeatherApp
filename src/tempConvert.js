function tempConvert(response) {
    if (degreeSectionSpan.textContent === "F°") {
      temperatureDegree.textContent = Math.round(
        (response - 32) * (5 / 9)
      );
      degreeSectionSpan.textContent = "C°";
    } else {
      temperatureDegree.textContent = Math.round(response);
      degreeSectionSpan.textContent = "F°";
    }
  }

