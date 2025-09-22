<?php
session_start();
if (!isset($_SESSION["admin"])) {
  http_response_code(403);
  echo "Access denied.";
  exit;
}

$conn = new mysqli("localhost", "root", "", "cube_movers");
$result = $conn->query("SELECT * FROM workers");

$workers = [];
while ($row = $result->fetch_assoc()) {
  $workers[] = $row;
}

echo json_encode($workers);
?>
