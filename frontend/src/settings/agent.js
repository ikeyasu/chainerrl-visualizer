// AGENT TYPE
export const CATEGORICAL_DQN = 'CategoricalDQN';
export const PPO = 'PPO';
export const A3C = 'A3C';

// CHART TYPE
export const DISCRETE_QVALUES = 'DISCRETE_QVALUES';
export const VALUE_DISTRIBUTION = 'VALUE_DISTRIBUTION';
export const CONTINUOUS_STOCHASTIC_ACTIONS_AND_VALUE = 'CONTINUOUS_STOCHASTIC_ACTIONS_AND_VALUE ';
export const DISCRETE_STOCHASTIC_ACTIONS = 'DISCRETE_STOCHASTIC_ACTIONS';

// VALUES PANE TYPE
export const DISCRETE_QVALUES_PANE = 'DISCRETE_QVALUES_PANE';
export const CONTINUOUS_STOCHASTIC_ACTIONS_PANE = 'CONTINUOUS_STOCHASTIC_ACTIONS_PANE';
export const DISCRETE_STOCHASTIC_ACTIONS_PANE = 'DISCRETE_STOCHASTIC_ACTIONS_PANE';

export const AGENT_TO_CHARTS = {
  [CATEGORICAL_DQN]: [
    DISCRETE_QVALUES,
    VALUE_DISTRIBUTION,
  ],
  [PPO]: [
    CONTINUOUS_STOCHASTIC_ACTIONS_AND_VALUE,
  ],
  [A3C]: [
    DISCRETE_STOCHASTIC_ACTIONS,
  ],
};

export const AGENT_TO_VALUES_PANE = {
  [CATEGORICAL_DQN]: DISCRETE_QVALUES_PANE,
  [PPO]: CONTINUOUS_STOCHASTIC_ACTIONS_PANE,
  [A3C]: DISCRETE_STOCHASTIC_ACTIONS_PANE,
};
