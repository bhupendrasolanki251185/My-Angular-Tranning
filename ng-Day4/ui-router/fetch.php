<?php
$link=mysqli_connect("localhost","root","","angular_9am");
$sel=mysqli_query($link,"select name from emp");
$arr=array();
while($arr1=mysqli_fetch_array($sel))
{
	$arr[]=$arr1;
}
echo json_encode($arr);
?>