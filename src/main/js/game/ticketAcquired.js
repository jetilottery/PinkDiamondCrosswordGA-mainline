define((require) => {
  const scenarioData = require('skbJet/componentManchester/standardIW/scenarioData');
  const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
  const crosswordGrid = require('game/components/crosswordGrid');

  function ticketAcquired() {
    crosswordGrid.populate(scenarioData.scenario.cells);

    gameFlow.next('START_TURN');
  }

  gameFlow.handle(ticketAcquired, 'TICKET_ACQUIRED');
});
