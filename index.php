<html>
    <head>
        <title>Projekt cryp</title>
        <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous" defer></script>
        <script type="text/javascript" src="js/base.js" defer></script>
        <script type="text/javascript" src="js/algorithms/rot13.js" defer></script>
        <script type="text/javascript" src="js/algorithms/xor.js" defer></script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
    </head>
    <style>
* {
  box-sizing: border-box;
}
textarea {
   resize: none;
}
body {
  font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
}

header {
  background-color: black;
  padding: 20px;
  text-align: center;
  font-size: 35px;
  color: white;
}

#nav1{
  float: left;
  width: 10%;
  height: 80%; 
  background: #3D9EFF;
  padding: 20px;
}
#nav2{
  float: right;
  width: 10%;
  height: 80%; 
  background: #3D9EFF;
  padding: 20px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}

section:after {
  content: "";
  display: table;
  clear: both;
}

footer {
  background-color: black;
  padding: 10px;
  text-align: center;
  color: white;
position: fixed;
    height: 7%;
    width: 100%;
    top: 93%;
}

#Rot13style{
    color: red;
}
#Text1{

}
#Text2{
float: right;
        }
#t1{
    width: 33%;        
        }
#t2{
    width: 33%;   
    text-align: center;
        }
#t3{
    width: 33%;   
        }
#t4{
    width: 33%;        
        }
#Table1{
         width: 80%;
        }
#div1{
    
        }
#div2{
    
        }
.Divtext{
    width: 90%;
    height: 400px;
    margin: 10px;
        }
#b1{
     width: 100px;
    height: 33px;
            
        }
#b2{
    width: 100px;
    height: 33px;
            
        }
</style>
<body>


<header>
  <h2>Crypt</h2>
</header>

<section>
  <nav id="nav1">
    <ul id="menu">
        <input type="radio" class="algoritmer" value="Rot13"> Rot13<br>
        <input type="radio" class="algoritmer" value="Rsa"> RSA<br>
        <input type="radio" class="algoritmer" value="Aes"> AES<br>
        
    </ul>
  </nav>
     <nav id="nav2">
  </nav>
    <table id="Table1">
        <td id="t1">
    <div id="div1">
        <textarea class="Divtext" id="Text1"></textarea>
    </div>
        </td>
        <td id="t2">
        <button id="b1" onclick="decClick()">Decrypt</button><br><br><textarea id="t4"></textarea><br><br>
        <button id="b2" onclick="encClick()">Encrypt</button>
            
        </td>
        <td id="t3">
    <div id="div2">
        <textarea class="Divtext" id=Text2></textarea>
    </div>
        </td>
    </table>
    
    
    
  
</section>

<footer>
  <p>Aksel & Jannik</p>
</footer>

</body>
</html>