<?php
session_start();

// Database connection
$connection = new mysqli('localhost:3306', 'injamtan', 'Tanvir*2002#@++', 'injamtan_USER_DATA');

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $username = $connection->real_escape_string($_POST['username']);
    $password = $connection->real_escape_string($_POST['password']);

    // Prepared statement to select data from database
    $stmt = $connection->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    // Execute the prepared statement
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Check if user exists and verify password
    if ($user && password_verify($password, $user['password_hash'])) {
        // Set session variables
        $_SESSION['loggedin'] = true;
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        // Redirect to dashboard
        header("Location: dashboard.php");
    } else {
        echo "Username or password is incorrect.";
    }

    // Close statement
    $stmt->close();
}

// Close connection
$connection->close();
?>
