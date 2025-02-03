<?php
    require_once("functions.php");

    $file=file_get_contents("pets.json");
    $pets=json_decode($file,true);

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="design.css" rel="stylesheet">
        <title>Pet Shelter</title>
    </head>
    <body>
        <?php printNav("index"); ?>
<!--First row-->
        <div class="row m-3">
            <div class="col-sm-4">
                <div class="card w-100">
                    <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">Name</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Name</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Name</p>
                    </div>
                </div>
            </div>
        </div>
<!--Second row-->
        <div class="row m-3">
            <div class="col-sm-4">
                <div class="card w-100">
                    <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">Name</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Name</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Name</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
</html>