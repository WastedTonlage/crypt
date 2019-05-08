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
        <link rel="stylesheet" type="text/css" href="indexcss.css">
    </head>
    <style>

</style>
<body>


<header>
  <h2>Crypt</h2>
</header>

<section>
  <nav id="nav1">
    <ul id="menu">

        
    </ul>
  </nav>
     <nav id="nav2">
  </nav>
    <table id="Table1">
        <td id="t1">
    <div id="div1">
        <textarea class="Divtext" id="Text1" placeholder="your text"></textarea>
    </div>
        </td>
        <td id="t2">
        <button id="b1" onclick="decClick()">Decrypt</button><br><br><textarea id="t4" placeholder="Key"></textarea><br><br>
        <button id="b2" onclick="encClick()">Encrypt</button>
            
        </td>
        <td id="t3">
    <div id="div2">
        <textarea class="Divtext" id=Text2 placeholder="Not Set the text here"></textarea>
    </div>
        </td>
    </table>
    
    
    
  
</section>

<footer>
  <p>Aksel & Jannik</p>
</footer>

</body>
</html>