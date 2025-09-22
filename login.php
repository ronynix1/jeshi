<?php
session_start();
$conn = new mysqli("localhost", "root", "", "cube_movers");

$username = $_POST["username"];
$password = $_POST["password"];

$sql = "SELECT * FROM admins WHERE username=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
  if (password_verify($password, $row["password"])) {
    $_SESSION["admin"] = $username;
    header("Location: dashboard.html");
    exit;
  }
}

echo "❌ Invalid login.";
?>
