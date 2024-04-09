document.getElementById("showGuide").addEventListener("click", function() {
  var guideContent = document.getElementById("guideContent");
  if (guideContent.style.display === "block") {
      guideContent.style.display = "none";
  } else {
      guideContent.style.display = "block";
      // You can populate guide content dynamically here
      guideContent.innerHTML = "<p>Here are some tips for successful breastfeeding:</p><li>Ensure proper latching</li><li>Feed frequently, on demand</li><li>Stay hydrated</li><li>Seek help from a lactation consultant if needed</li><li>Thrush: Fungal infection causing white patches in the baby's mouth and nipple pain in the mother.</li><li>Engorged Breasts: Overfilled breasts causing swelling, pain, and difficulty latching for the baby.</li><li>Plugged Duct: Blockage in a milk duct leading to localized pain and inflammation.</li><li>Breast Abscess: Collection of pus in the breast tissue due to bacterial infection.</li><li>Nipple Trauma: Injuries or damage to the nipple tissue resulting from improper latching or sucking.</li>";
  }
});

document.getElementById("showSymptoms").addEventListener("click", function() {
  var symptomsContent = document.getElementById("symptomsContent");
  if (symptomsContent.style.display === "block") {
      symptomsContent.style.display = "none";
  } else {
      symptomsContent.style.display = "block";
      // You can populate symptoms content dynamically here
      symptomsContent.innerHTML = "<p>Here are some common riskful symptoms during breastfeeding:</p><li>Sore or cracked nipples</li><li>Engorged breasts</li><li>Low milk supply</li><li>Mastitis (breast infection)</li><li>Thrush (yeast infection in the breast)</li>";
  }
});
