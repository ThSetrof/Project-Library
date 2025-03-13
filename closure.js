const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
        ++timesRun;
        log(`Setting times run ${timesRun}`);
      
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };

    const getTimesRun = () => timesRun;
  
    return {
      makeUppercase,
      timesRun,
      getTimesRun
    }
  })();
