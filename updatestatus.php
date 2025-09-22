<?php
session_start();
if (!isset($_SESSION["admin"])) {
  http_response_code(403);
  echo "Access denied.";
  exit;
}

$conn = new mysqli("localhost", "root", "", "cube_movers");
$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];
$field = $data["field"];

if (in_array($field, ["returned", "paid"])) {
  $stmt = $conn->prepare("UPDATE workers SET $field=TRUE WHERE id=?");
  $stmt->bind_param("i", $id);
  $stmt->execute();
  echo "✅ Updated.";
} else {
  echo "❌ Invalid field.";
}
?>

