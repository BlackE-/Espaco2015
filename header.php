<!DOCTYPE html>
<html>
<head>
	<title>Prueba de lineas ESPAC</title>
	
		<!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	
	<link rel="stylesheet" href="css/normalize.css">
  	<link rel="stylesheet" href="css/skeleton.css">
  	<link href='css/style-sub.css' rel='stylesheet' type='text/css'>
	<link href='css/font-sub.css' rel='stylesheet' type='text/css'>
  <!-- JQuery
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->	
	<script type="text/javascript" src="scripts/jquery-1.11.1-min.js"></script>

</head>
<body>
	<div class="container" >
		<div class="row">
			<div class="eight columns">
				<div class="container-logo">
					<img src="img/logo.png">
				</div>
			</div>
			<div class="four columns">
				<div class="container-newsletter">
					<form action="PHP/send2.php" method="post">
		                <table>
		                	<tr>
			                	<th colspan="2">
			                		<p class="p1">INSCR&Iacute;BETE A NUESTRO NEWSLETTER</p>
			                	</th>
		                	</tr>
		                	<tr>
		                        <td><input type="text" name="mail" maxlength="50" value="" aria-required="true" class="zerogrid_input"/></td>
		                        <td><input type="submit" id="send" name="send" value="enviar"/></td>
		                    </tr>
		                    <tr>
		                    	<td colspan="2">
		                    		<input type="checkbox" id="check" name="check" value=""/>
		               				<span style="font-size:11px">Acepto los t&eacute;rminos y condiciones</span> 
		                    	</td>
		                    </tr>
		               	</table>
		            </form>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="eight columns">
				<div id="navbar">
					<ul>
						<li class="home" id="home">
							<a href="index.php">Home</a>
						</li>
						<li>
							<a href="#">Acerca de</a>
						</li>
						<li>
							<a href="">Coleccion</a>
						</li>
						<li>
							<a href="">Proyectos</a>
						</li>
						<li>
							<a href="">Galeria</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="four columns">
				<div class="container-search">
					<form action="busqueda.php" method="post">
		            <table>
		                <tr>
		                        <td>
		                          <input type="text" id="busqueda" name="busqueda" maxlength="50" value="" aria-required="true" class="zerogrid_input"/>
		                        </td>
		                        <td>
		                          <input type="submit" id="send" name="send" value="" class="input-search"/>
		                        </td>
		                  </tr>
		              </table>
		            </form>

				</div>
			</div>
		</div>
		
	</div>