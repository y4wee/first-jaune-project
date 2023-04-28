// lifeCycle

import React, { useEffect } from "react";

// avec parametre [void]
const cycle_onMount_and_unMount = () => {
  useEffect(() => {
    console.log("Je me lance quand le cycle de vie commence: #onMounted");
    return console.log("Je me lance quand le cycle de vie fini: #onUnMounted");
  }, []);
};

// avec parametre [data]
const cycle_onUpdate_data = () => {
  useEffect(() => {
    console.log(`je me lance quand ${data} change: #onUpdateDeData`);
    return console.log(
      `je me lance avant que ${data} change: #onBeforeUpdateDeData + #onUnMounted`
    );
  }, [data]);
};

// sans parametre
const all_cycles = () => {
  useEffect(() => {
    console.log(
      "Je me lance a chaque que le cycle de vie commence et à chaque changements: #onMounted + #onUpdate"
    );
    return console.log("Je me lance quand le cycle de vie fini: #onUnMounted");
  });
};
