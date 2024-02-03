"use strict";

const navEl = document.querySelector("#nav");
const mainEl = document.querySelector("#main");

const STATE = {
  currentTab: null
};

const targetsContainer = document.querySelector(".targets");
const triggers = Array.from(document.querySelectorAll(".trigger"));
const targets = [];
const triggerSpec = document.querySelector(".trigger-spec");
triggerSpec.style.width = `${100 / triggers.length}%`;

triggers.forEach((trigger, ind) => {
  targets.push(document.querySelector(trigger.dataset.target));
  trigger.addEventListener("click", () => {
    STATE.currentTab = deactivateTab(STATE.currentTab);
    STATE.currentTab = activateTab(ind);
  });
});

STATE.currentTab = activateTab(0);

function activateTab(ind) {
  if (ind == null) return ind;
  const trigger = triggers[ind];
  trigger.classList.add("active");
  const target = targets[ind];
  target.classList.add("active");
  targetsContainer.style.transform = `translateX(-${ind}00%)`;
  triggerSpec.style.transform = `translateX(${ind}00%)`;
  return ind;
}

function deactivateTab(ind) {
  if (ind == null) return ind;
  const trigger = triggers[ind];
  trigger.classList.remove("active");
  const target = targets[ind];
  target.classList.remove("active");
  return null;
}
