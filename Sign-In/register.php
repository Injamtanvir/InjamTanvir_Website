<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password (use password_hash for security)
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Connect to the database (replace with your connection code)
    $mysqli = new mysqli("localhost:3306", "injamtan_IUHT", "Tanvir*2002#@++", "users");

    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Insert user data into the database
    $query = "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("ssss", $firstname, $lastname, $email, $hashedPassword);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Registration failed: " . $stmt->error;
    }

    // Close the database connection
    $stmt->close();
    $mysqli->close();
}
?>
