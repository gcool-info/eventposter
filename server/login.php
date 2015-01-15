<?php

	/* Check whether data exists */
	if (!isset($_POST["password"]))
		return false;

	/* $new_data contains the data received. */
	$new_data = $_POST["password"];

	/* Check that the user has set the right password */
	$handle = fopen("pass.txt", "r");
	$password = fread($handle, filesize("pass.txt"));
	fclose($handle);

	if ($new_data !== $password)
		die('Invalid Password');
	else
		die('Correct Password');

?>