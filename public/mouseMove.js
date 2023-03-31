document.addEventListener(
  'DOMContentLoaded',
  function() {
    var timerStart = Date.now();
    document.addEventListener('mousemove', function(e) {
      console.log(
        `Mouse Move at ${(Date.now() - timerStart) / 1000} >  X:${
          e.clientX
        }, Y:${e.clientY}`,
      );
    });
  },
  false,
);
