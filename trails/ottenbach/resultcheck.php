<?php
    $result = $_REQUEST["result"];
    switch ($result) {
        case "a1b2":
            echo "1";
            break;
        case "c3d4":
            echo "2";
            break;
        default:
            echo "-1";
    }
?>