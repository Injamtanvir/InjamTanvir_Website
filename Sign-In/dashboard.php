<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation menu -->
    <nav>
        <ul>
            <li><a href="dashboard.php">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>

    <!-- Content section -->
    <div class="content">
        <h1>Welcome to Your Dashboard</h1>
        <p>Hello, <span class="username"><?php echo $_SESSION['username']; ?></span></p>
        <p>This is where you can access various features and information.</p>
    </div>

    <script src="script.js"></script>
</body>
</html>
