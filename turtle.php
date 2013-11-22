<!DOCTYPE html>
<html>
  <head>
    <title>Triangle Fun</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">    
  </head>
  <body>
    <div class="container">
      <h4><a href="index.php"><span class="glyphicon glyphicon-arrow-left"></span> Back</a></h4>
      <header>
        <h1>Triangle Fun!</h1>
      </header>
      
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8" >
          <canvas id="myCanvas" width="800" height="400" ></canvas>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4" >
          <div id="myDiv" class="myDivClass pull-right"><h3 class="centreText myDivClass">Normal Mode</h3></div>
        </div>
      </div> <!-- row -->
      <div class="row">
        <div class="col-sm-12 pull-left">
          <p><span class="label label-default">shift</span><em> to toggle crazy mode</em> <span class="glyphicon glyphicon-pause"></span> <span class="label label-default">r</span> to reset <span class="glyphicon glyphicon-pause"></span> <span class="label label-default">space</span> to 180 turn <span class="glyphicon glyphicon-pause"></span> <span class="label label-default">up</span> to thrust <span class="glyphicon glyphicon-pause"></span> <span class="label label-default">left</span> to turn left <span class="glyphicon glyphicon-pause"></span> <span class="label label-default">right</span> to turn right</p>
        </div>        
      </div>


    </div> <!-- container -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>    
    <!-- <script src="js/turtle.js"></script> -->
    <script type="text/javascript" src="bower_components/paper/dist/paper.js"></script>
    <script type="text/paperscript" src="js/paperturtle.js" canvas="myCanvas"></script> 
  </body>
</html> 