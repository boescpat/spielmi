<?php

$level = $_REQUEST["level"];
switch ($level) {
    case "0":?>
            <h1>Intro</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi distinctio, aliquam dignissimos quae voluptates quas dicta delectus nemo, ullam sint officia voluptas adipisci, perspiciatis at libero neque totam nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ipsum ipsa eum quaerat. Possimus pariatur facilis non impedit veritatis. Totam in at nobis alias distinctio eos inventore, libero et repudiandae.</p>
            <label for="fname">First name:</label>
            <input type="text" name="fname" id="fname"><br>
            <button onclick="submitResult()">Einreichen!</button>
        <?php break;
    case "1":?>
        <h1>Test a1b2</h1>
        <?php break;
    case "2":?>
        <h1>Test c3d4</h1>
        <?php break;
    default: echo "hello world";
}

?>