<?php 
include("conexao.php"); 
$nome=$_POST['nome']; 
$email=$_POST['email']; 
$senha=md5$_POST['senha']; 

$sql="INSERT INTO formulario(nome,email,senha)
   VALUES('$nome', '$email', '$senha')"; 
if(mysqli_query($conexao, $sql)){ 
    echo"Usuario cadastro com sucesso"; }
  else{
     echo "Erro".mysqli_connect_error($conexao); } 
     mysqli_close($conexao); 
?>