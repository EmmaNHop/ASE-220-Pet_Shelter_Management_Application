<?php

    function printNav($page) {
        if($page == "index") {
            echo   "<nav class='nav nav-tabs nav-fill' style='background-color: black;'>
                        <a class='nav-link active' aria-current='page' href='index.php'>Home</a>
                        <a class='nav-link' href='detail.php'>detail...</a>
                    </nav>";
        } elseif($page == "detail") {
            echo   "<nav class='nav nav-tabs nav-fill' style='background-color: black;'>
                        <a class='nav-link' href='index.php'>Home</a>
                        <a class='nav-link active' aria-current='page' href='detail.php'>detail...</a>
                    </nav>";
        } else {
            echo "Error";
        }
    }

    function printCard() {
        
    }


?>