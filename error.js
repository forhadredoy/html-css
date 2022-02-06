try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err){
      console.log(err.message);
      console.log(err.name);
  }
  var h=77;

  try{
      h.touppercase();

  }
  catch(err){
      console.log(err.name);

  }
  