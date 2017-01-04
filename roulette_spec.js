var roulette_tester = {

  // init: function(rouletteObj){
  //   console.log("Initializing test...");
  //   // this.sprintObj = sprintObj;
  //   // this.testLargestEl();
    // this.rouletteObj = routletteObj;
    // this.test
  // },
  var roulette = new Roulette(100);

  results: {},

  assert_equal: function(result, expected) {
    if (result == expected) {
      this.results.result = 'You got it right!'
      this.displayResults();
      return true;
    } else {
      this.results.result = `Expected ${expected}, got ${result}`;
      this.displayResults()
      return false;
    }
  },

  testFunds: function() {
    this.results.funds = this.assert_equal(roulette.funds, 100)
  }

  displayResults: function(){
    console.log("Displaying results...");
    console.log(this.results.result)
    $("#roulette-results").html(String(this.results.result));
    $("#funds").html(String(this.results.funds));
  }
}

// $(document).ready( function(){ tester.init( sprintFunctions )});
