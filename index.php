<?php
/**
 * Created by PhpStorm.
 * User: Usuario
 * Date: 11/10/2016
 * Time: 9:36
 */

$go=@$_GET['action'];
if(!isset($go)){$go='inicio';}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AzkthezeTech - Portafolio de Álvaro</title>
    <link rel="stylesheet" href="css/web.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="icon" href="images/icons/favicon.png" />
    <script type = "text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script type = "text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/web.js"></script>
<body> <!--- onload="fixHeight()" -->
    <div class="pres">
        <div class="mask"></div>
    </div>
    <div id="go-top">Ir arriba ^</div>
    <div id="cssmenu">
        <ul>
            <li class="active"><a href="inicio" class="scroll-nav menu-func" data-dest="Start"><i class="fa fa-fw fa-home"></i> Inicio</a></li>
            <li><a href="javascript:;" class="scroll-nav menu-func" data-dest="About_me"><i class="fa fa-fw fa-bars"></i> Sobre mí</a>
                <ul>
                    <li><a href="#">Menu 1</a>
                        <ul>
                            <li><a href="#">Menu 1.1</a></li>
                            <li><a href="#">Menu 1.2</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Menu 2</a></li>
                </ul>
            </li>
            <li><a href="javascript:;" class="scroll-nav menu-func" data-dest="Contact"><i class="fa fa-fw fa-phone"></i> Contacto</a></li>
            <li class="lat-border"><a href="blog"><i class="fa fa-fw fa-book"></i> Blog</a></li>
        </ul>
    </div>
    <header>
        <!-- <img src="images/logo.png" /> -->

        <?php
            if ($go != 'inicio'):
        ?>
                <h1>AzkthezeTech</h1>
                Portafolio de Álvaro
        <?php
            else:
        ?>
                <div id="centered_main">
                    <h1 id="slogan_title">¡Hola! Estás en AzkthezeTech</h1>
                    <div id="slogan_text"><b><i>Portafolio & blog especializado en programación, diseño y desarrollo web</i></b></div>
                </div>
                <div id="centered_arrow"><span class="scroll-nav" data-dest="Start">v</span></div>
        <?php
            endif;
        ?>
    </header>
    <main>

        <?php

        switch($go)
        {
            case 'inicio':
                include('includes/index.php');
                break;
            case 'blog':
                include('includes/blog/index.php');
                break;
            /*case 'contacto':
                include('includes/contact.php');
                break;*/
            default:
                include('includes/404.php');
                break;
        }

        ?>
        <footer>
            © AzkthezeTech - Todos los derechos reservados. <script>document.write(new Date().getFullYear())</script>
        </footer>
    </main>
</body>
</html>
