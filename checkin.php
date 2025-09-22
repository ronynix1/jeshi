<?php
$conn = new mysqli("localhost", "root", "", "cube_movers");

$name = $_POST["workerName"];
$type = $_POST["workerType"];
$tshirt = $_POST["tshirtNumber"];
$job = $_POST["jobAssigned"];

$stmt = $conn->prepare("INSERT INTO workers (name, type, tshirt, job) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssis", $name, $type, $tshirt, $job);
$stmt->execute();

echo "✅ Worker '$name' checked in.";
?>

