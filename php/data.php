<?php
function getData() {
    $totalUsers = 1500;
    $totalSales = 250;
    $totalRevenue = 5000;

    $data = [
        'totalUsers' => $totalUsers,
        'totalSales' => $totalSales,
        'totalRevenue' => $totalRevenue
    ];

    return $data;
}

echo json_encode(getData());
?>