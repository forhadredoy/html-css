try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
   console.log(err.message)
  }