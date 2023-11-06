<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Connect to the database (replace with your connection code)
    $mysqli = new mysqli("localhost:3306", "injamtan_IUHT", "Tanvir*2002#@++", "users");

    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Check user credentials
    $query = "SELECT id, email, password FROM users WHERE email=?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Start a session and store user information
            session_start();
            $_SESSION['user_id'] = $user['id'];
            // Redirect to the dashboard or another page upon successful login
            header("Location: dashboard.php");
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "User not found";
    }

    // Close the database connection
    $stmt->close();
    $mysqli->close();
}
?>
