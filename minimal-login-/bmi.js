function calculateBMI() {
    // Get height and weight values
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    // Check if height and weight are provided
    if (height && weight) {
        // Convert height to meters
        var heightInMeters = height / 100;

        // Calculate BMI
        var bmi = weight / (heightInMeters * heightInMeters);

        // Display the result
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);

        // Show the result section
        document.getElementById('result').style.display = 'block';

        // Provide a diet suggestion based on BMI
        if (bmi < 18.5) {
            document.getElementById('diet-suggestion').innerText = 'You are underweight. Consider a balanced diet with more proteins and healthy fats.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            document.getElementById('diet-suggestion').innerText = 'Your BMI is in the normal range. Keep up the good work with a balanced diet and regular exercise.';
        } else {
            document.getElementById('diet-suggestion').innerText = 'You are overweight. Focus on a balanced diet with portion control and regular physical activity.';
        }
    } else {
        // If height or weight is not provided, display an error message
        alert('Please enter both height and weight to calculate BMI.');
    }
}
