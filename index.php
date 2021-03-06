<!DOCTYPE html>
<html>
  <head>
    <title>Alex Emms - Systems Engineering CW3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <header>
        <div class="pull-left"><h1>Alex Emms Systems Engineering Coursework 3</h1></div>
          <h3><a href="turtle.php"><span class="glyphicon glyphicon-expand pull-right spacing"></span></h3><h3 class="pull-right">Play Triangle Game  </h3></a>
      </header>
      <section class="row space">
        <?php include "php/section_myself.php" ?>
        <?php include "php/section_description.php" ?>
      </section> <!-- row -->
      <section class="row space wordpress">
        <h2>Wordpress Feed</h2>
        <iframe id="wordpress" width="1200" height="315" src="http://blog.alexemms.com/" frameborder="0" allowfullscreen></iframe>      
      </section>
      <section class="space spacebottom">
        <h2>Github Feed</h2>
        <div id="github-commits"></div>  
      </section>
    </div> <!-- container -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
    <script src="js/widget.js"></script>

    <script>
        $(function() {
                $('#github-commits').githubInfoWidget(
                        { user: 'aemms', repo: 'systemsCW2', branch: 'master', last: 15, limitMessageTo: 30 });
        });
    </script>  

  </body>
</html>